import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { Trash2, Loader2 } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetBrands } from "@/lib/api/brand";
import { useEditProduct, useGetProductById } from "@/lib/api/products";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import { Form, Formik } from "formik";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { toast } from "sonner";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import CustomFormikInput from "@/components/shared/CustomFormikInput";
import CustomFormikSelect from "@/components/shared/CustomFormikSelect";
import CustomFormikTextarea from "@/components/shared/CustomFormikTextarea";
import { cn } from "@/lib/utils";
import UploadImgArea from "@/components/shared/molecules/UploadArea";
import { FaCheckCircle } from "react-icons/fa";
import { useGetCategories, useGetSubcategories } from "@/lib/api/categories";
import CustomFormikMultiInput from "@/components/shared/CustomFormikMultiInput";
import { useGetAllUsers } from "@/lib/api/userManagement";
import { UserRoles } from "@/constants/enums";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Brand name must be at least 2 characters long")
        .required("Required"),
    description: Yup.string()
        .min(10, "Description must be at least 10 characters long")
        .required("Required"),
    brandId: Yup.string().required("Brand Required"),
    corporateProfileId: Yup.string().required("Corporate Profile Required"),
    categoryId: Yup.string().required("Category Required"),
    price: Yup.string().required("Price Required"),
    productImageOne: Yup.mixed<File>()
        .required("Image is required")
        .test(
            "fileSize",
            "Image too large",
            (value) => value instanceof File ? !value || value.size <= 5 * 1024 * 1024 : true
        ), // 5MB
});

const EditProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams()

    const [searchBrands, setSearchBrands] = useState("");
    const [searchCategories, setSearchCategories] = useState("");
    const [searchSubCategories, setSearchSubCategories] = useState("");
    const [searchCorporate, setSearchCorporate] = useState("");

    const debounceBrandSearch = useDebounce(searchBrands, 2000);
    const debounceCategorySearch = useDebounce(searchCategories, 2000);
    const debounceSubCategorySearch = useDebounce(searchSubCategories, 2000);
    const debounceCorporateSearch = useDebounce(searchCorporate, 2000);

    const { data: brandsData, isLoading: isBrandsLoading } = useGetBrands({
        search: debounceBrandSearch,
    });
    const { data: categoryData, isLoading: isCategoryLoading } = useGetCategories(
        {
            search: debounceCategorySearch,
        }
    );
    const { data: subCategoryData, isLoading: isSubCategoryLoading } =
        useGetSubcategories({
            search: debounceSubCategorySearch,
        });

    const { data: corporateData, isLoading: isCorporateLoading } = useGetAllUsers(
        {
            role: UserRoles.corporate,
            per_page: 20,
            search: debounceCorporateSearch,
        }
    );

    const updateProductMutate = useEditProduct();
    const { data, isLoading } = useGetProductById(productId);



    const getActiveProductImageUpload = (value: IProductForm) => {
        if (value.productImageOne) {
            if (value.productImageTwo) {
                if (value.productImageThree) {
                    if (value.productImageFour) {
                        return "productImageFour";
                    } else {
                        return "productImageFour";
                    }
                } else {
                    return "productImageThree";
                }
            } else {
                return "productImageTwo";
            }
        } else {
            return "productImageOne";
        }
    };

    const getProductImageName = (index: number) => [
        "One",
        "Two",
        "Three",
        "Four",
    ].slice(index, index + 1)

    return (
        data && !isLoading ?
            <>
                <Formik<IProductForm>
                    initialValues={{
                        brandId: data.brand_id,
                        corporateProfileId: data.corporate_profile_id,
                        categoryId: data.category_id,
                        subCategoryId: data.sub_category_id,
                        name: data.name,
                        description: data.description,
                        weight: data.weight,
                        dimension: data.dimension,
                        additionalSpecification: data.additional_specification,
                        attribute: data?.attribute || [],
                        variants: data?.variants || [],
                        tags: data?.tags?.split(",") || [],
                        isAvailable: data.is_available ? "1" : "0",
                        price: data.price,
                        productCode: data.product_code,
                        productImageOne: data.product_image_one,
                        productImageTwo: data.product_image_two,
                        productImageThree: data.product_image_three,
                        productImageFour: data.product_image_four,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values,) => {
                        try {
                            if (!productId) return toast.error("No product Id Selected")
                            const formData = new FormData();
                            formData.append("name", values.name);
                            formData.append("description", values.description);
                            formData.append("brand_id", values.brandId);
                            formData.append("category_id", values.categoryId);
                            formData.append("corporate_profile_id", values.corporateProfileId);
                            if (values.subCategoryId)
                                formData.append("sub_category_id", values.subCategoryId);
                            formData.append("weight", values.weight);
                            formData.append("dimension", values.dimension);
                            formData.append("product_code", values.productCode);
                            formData.append(
                                "additional_specification",
                                values.additionalSpecification
                            );
                            if (values.variants.length > 0) {
                                for (const item of values.variants) {
                                    formData.append("variants[]", item);
                                }
                            }
                            if (values.attribute.length > 0) {
                                for (const item of values.attribute) {
                                    formData.append("attribute[]", item);
                                }
                            }
                            if (values.tags.length > 0) {
                                formData.append("tags", values.tags.join(", "));
                            }
                            formData.append("is_available", values.isAvailable);
                            formData.append("price", values.price);
                            if (values?.productImageOne && values.productImageOne instanceof File) {

                                formData.append("product_image_one", values.productImageOne);
                            }
                            if (values?.productImageTwo && values.productImageOne instanceof File) {
                                formData.append("product_image_two", values.productImageTwo);
                            }

                            if (values?.productImageThree && values.productImageOne instanceof File) {
                                formData.append("product_image_three", values.productImageThree);
                            }

                            if (values?.productImageFour && values.productImageOne instanceof File) {
                                formData.append("product_image_four", values.productImageFour);
                            }

                            await updateProductMutate.mutateAsync({
                                data: formData,
                                productId
                            });


                        } catch (error) {
                            if (error instanceof Error) {
                                return toast.error(error.message);
                            }
                            return toast.error("Could not update Product ");
                        }
                    }}
                >
                    {({ setFieldValue, errors, values }) => (
                        <Form className="p-[1rem] space-y-[4rem] ">
                            <SecondaryHeader
                                title="Edit Product"
                                subTitle="Fill details to Edit Product"
                                addButtonText="Update Product"
                                addButtonFunc={() => { }}
                                addButtonType="submit"
                                removeButtonFunc={() => navigate(-1)}
                                removeButtonText="Cancel"
                            />
                            <div className="min-h-screen bg-gray-50 p-6">
                                <div className="">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Left Column */}
                                        <div className="space-y-6">
                                            {/* Basic Information */}
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-[1.4rem] font-semibold">
                                                        Basic Information
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <CustomFormikInput
                                                            name="name"
                                                            label="Product Name"
                                                            placeholder="Adidas Mens shoe"
                                                            type="text"
                                                        />

                                                        <CustomFormikInput
                                                            name="price"
                                                            label="Product Price"
                                                            placeholder="20000"
                                                            type="text"
                                                        />
                                                    </div>
                                                    <CustomFormikTextarea
                                                        name="description"
                                                        label="Product Description"
                                                        placeholder="Product Description goes here..."
                                                        rows={100}
                                                    />

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <CustomFormikSelect
                                                            label="Select Brand"
                                                            name="brandId"
                                                            placeholder="Select Brand"
                                                            className="bg-white"
                                                        >
                                                            <SelectContent>
                                                                <Input
                                                                    onChange={(e) =>
                                                                        setSearchBrands(e.target.value)
                                                                    }
                                                                    value={searchBrands}
                                                                    placeholder="Search brands here..."
                                                                    className="mb-6"
                                                                />
                                                                {brandsData && !isBrandsLoading ? (
                                                                    brandsData.data.map((brand) => (
                                                                        <SelectItem
                                                                            className="text-[1.4rem] p-3"
                                                                            key={brand.id}
                                                                            value={brand.id || ""}
                                                                        >
                                                                            {brand.name}
                                                                        </SelectItem>
                                                                    ))
                                                                ) : (
                                                                    <div className="grid place-content-center p-[2rem]">
                                                                        <Loader2 />
                                                                    </div>
                                                                )}
                                                            </SelectContent>
                                                        </CustomFormikSelect>
                                                        <CustomFormikSelect
                                                            label="Select Corporate"
                                                            name="corporateProfileId"
                                                            placeholder="Select Corporate"
                                                            className="bg-white"
                                                        >
                                                            <SelectContent>
                                                                <Input
                                                                    onChange={(e) =>
                                                                        setSearchCorporate(e.target.value)
                                                                    }
                                                                    value={searchCorporate}
                                                                    placeholder="Search Corporate here..."
                                                                    className="mb-6"
                                                                />
                                                                {corporateData && !isCorporateLoading ? (
                                                                    (corporateData.data as ICorporateUser[]).map(
                                                                        (corporate) => (
                                                                            <SelectItem
                                                                                className="text-[1.4rem] p-3"
                                                                                key={corporate.id}
                                                                                value={corporate?.profile?.id || ""}
                                                                            >
                                                                                {corporate?.profile?.company_name ||
                                                                                    corporate.user_name}
                                                                            </SelectItem>
                                                                        )
                                                                    )
                                                                ) : (
                                                                    <div className="grid place-content-center p-[2rem]">
                                                                        <Loader2 />
                                                                    </div>
                                                                )}
                                                            </SelectContent>
                                                        </CustomFormikSelect>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* Media */}
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-[1.4rem] font-semibold flex items-center gap-2">
                                                        Media
                                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="space-y-4">
                                                        <label
                                                            className={cn(
                                                                `font-medium text-[1.4rem] flex mb-4  text-gray-700  leading-[2.03rem]`
                                                            )}
                                                            htmlFor=""
                                                        >
                                                            Product Image
                                                        </label>
                                                        <UploadImgArea
                                                            noPreview
                                                            name={getActiveProductImageUpload(values)}
                                                            setFieldValue={setFieldValue}
                                                        />

                                                    </div>

                                                    {/* Uploaded Files */}
                                                    {[
                                                        values.productImageOne,
                                                        values.productImageTwo,
                                                        values.productImageThree,
                                                        values.productImageFour,
                                                    ].map((file, index) => {
                                                        if (file && file instanceof File) {
                                                            return (
                                                                <>
                                                                    <div
                                                                        key={index}
                                                                        className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            <FaCheckCircle className="size-8 text-emerald-500" />
                                                                            <img
                                                                                className="object-cover object-center  h-[4rem] w-[8rem] rounded-lg overflow-hidden border-primary"
                                                                                src={URL.createObjectURL(file)}
                                                                                alt="Product Image"
                                                                            />
                                                                            <div>
                                                                                <p className="font-medium text-[1.2rem]">
                                                                                    {file.name}
                                                                                </p>
                                                                                <p className="text-[1rem] text-gray-500">
                                                                                    {Math.round(file.size / 1024)} KB
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <Button
                                                                            variant="ghost"
                                                                            type="button"
                                                                            size="sm"
                                                                            onClick={() => {
                                                                                setFieldValue(
                                                                                    `productImage${getProductImageName(index)}`,
                                                                                    null
                                                                                );
                                                                            }}
                                                                        >
                                                                            <Trash2 className="size-6 text-red-500" />
                                                                        </Button>
                                                                    </div>
                                                                    <div className="text-md text-[#D92626]">{errors[`productImage${getProductImageName(index)}` as keyof IProductForm]}</div>
                                                                </>
                                                            );
                                                        } else if (file && typeof file === "string") {
                                                            return (
                                                                <>
                                                                    <div
                                                                        key={index}
                                                                        className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            <FaCheckCircle className="size-8 text-emerald-500" />
                                                                            <img
                                                                                className="object-cover object-center  h-[4rem] w-[8rem] rounded-lg overflow-hidden border-primary"
                                                                                src={file}
                                                                                alt="Product Image"
                                                                            />
                                                                            <div>
                                                                                <p className="font-medium text-[1.2rem]">
                                                                                    Product Image {index + 1}
                                                                                </p>
                                                                                <p className="text-[1rem] text-gray-500">
                                                                                    N/A
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <Button
                                                                            variant="ghost"
                                                                            type="button"
                                                                            size="sm"
                                                                            onClick={() => {
                                                                                setFieldValue(
                                                                                    `productImage${[
                                                                                        "One",
                                                                                        "Two",
                                                                                        "Three",
                                                                                        "Four",
                                                                                    ].slice(index, index + 1)}`,
                                                                                    null
                                                                                );
                                                                            }}
                                                                        >
                                                                            <Trash2 className="size-6 text-red-500" />
                                                                        </Button>
                                                                    </div>
                                                                    <div className="text-md text-[#D92626]">{errors[`productImage${getProductImageName(index)}` as keyof IProductForm]}</div>

                                                                </>
                                                            );
                                                        }

                                                        return null;
                                                    })}
                                                </CardContent>
                                            </Card>

                                            {/* Specifications */}
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-[1.4rem] font-semibold">
                                                        Specifications
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="grid grid-cols-2 gap-4 items-end">
                                                        <CustomFormikInput
                                                            name="weight"
                                                            label="Weight"
                                                            placeholder="5kg"
                                                            type="text"
                                                        />
                                                        <CustomFormikInput
                                                            name="dimension"
                                                            label="Dimension"
                                                            placeholder="45 X 56"
                                                            type="text"
                                                        />
                                                    </div>
                                                    <CustomFormikInput
                                                        name="additional_specification"
                                                        label="Additional Specification"
                                                        placeholder="additional notes here"
                                                        type="text"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-6">
                                            {/* Category */}
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-[1.4rem] font-semibold">
                                                        Category
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <CustomFormikSelect
                                                        label="Category"
                                                        name="categoryId"
                                                        placeholder="Select Category"
                                                        className="bg-white"
                                                    >
                                                        <SelectContent>
                                                            <Input
                                                                onChange={(e) =>
                                                                    setSearchCategories(e.target.value)
                                                                }
                                                                value={searchCategories}
                                                                placeholder="Search Categories here..."
                                                                className="mb-6"
                                                            />
                                                            {categoryData && !isCategoryLoading ? (
                                                                categoryData.data.map((category) => (
                                                                    <SelectItem
                                                                        className="text-[1.4rem] p-3"
                                                                        key={category.id}
                                                                        value={category.id || ""}
                                                                    >
                                                                        {category.name}
                                                                    </SelectItem>
                                                                ))
                                                            ) : (
                                                                <div className="grid place-content-center p-[2rem]">
                                                                    <Loader2 />
                                                                </div>
                                                            )}
                                                        </SelectContent>
                                                    </CustomFormikSelect>

                                                    <CustomFormikSelect
                                                        label="Sub Category"
                                                        name="subCategoryId"
                                                        placeholder="Select Sub Category"
                                                        className="bg-white"
                                                    >
                                                        <SelectContent>
                                                            <Input
                                                                onChange={(e) =>
                                                                    setSearchSubCategories(e.target.value)
                                                                }
                                                                value={searchSubCategories}
                                                                placeholder="Search Categories here..."
                                                                className="mb-6"
                                                            />
                                                            {subCategoryData && !isSubCategoryLoading ? (
                                                                subCategoryData.data.map((category) => (
                                                                    <SelectItem
                                                                        className="text-[1.4rem] p-3"
                                                                        key={category.id}
                                                                        value={category.id || ""}
                                                                    >
                                                                        {category.name}
                                                                    </SelectItem>
                                                                ))
                                                            ) : (
                                                                <div className="grid place-content-center p-[2rem]">
                                                                    <Loader2 />
                                                                </div>
                                                            )}
                                                        </SelectContent>
                                                    </CustomFormikSelect>

                                                    <CustomFormikMultiInput
                                                        name="tags"
                                                        label="Tags (Optional)"
                                                        placeholder="Use space to enter tags"
                                                        type="text"
                                                    />
                                                </CardContent>
                                            </Card>

                                            {/* Availability */}
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-[1.4rem] font-semibold">
                                                        Availability & Product Code
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-[1rem]">
                                                    <CustomFormikSelect
                                                        label="Is Product Available?"
                                                        name="isAvailable"
                                                        placeholder="Select Availability"
                                                        className="bg-white"
                                                    >
                                                        <SelectContent>
                                                            <SelectItem
                                                                className="text-[1.4rem] p-3"
                                                                value={"1"}
                                                            >
                                                                Available
                                                            </SelectItem>
                                                            <SelectItem
                                                                className="text-[1.4rem] p-3"
                                                                value={"0"}
                                                            >
                                                                Unavailable
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </CustomFormikSelect>
                                                    <CustomFormikInput
                                                        name="productCode"
                                                        label="Product code"
                                                        placeholder="Enter the product Code"
                                                        type="text"
                                                    />
                                                </CardContent>
                                            </Card>

                                            {/* Variations */}
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-[1.4rem] font-semibold">
                                                        Variations
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="space-y-2">
                                                        <CustomFormikMultiInput
                                                            name="variants"
                                                            label="Variants"
                                                            placeholder="color, size etc"
                                                            type="text"
                                                        />
                                                        <p className="text-[1.2rem] text-gray-500">
                                                            Tap Enter to save variant
                                                        </p>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <CustomFormikMultiInput
                                                            name="attribute"
                                                            label="Attributes"
                                                            placeholder="Blue, 3xl etc"
                                                            type="text"
                                                        />
                                                        <p className="text-[1.2rem] text-gray-500">
                                                            Use commas to list options and Tap enter to save
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="text-md text-[#D92626]">{Object.values(errors).map((i) => i)}</div> */}

                        </Form>
                    )}
                </Formik>
                <LoadingSpinnerModal isOpen={updateProductMutate.isPending} />
            </> : <LoadingSpinnerModal title="Loading" description="You page is loading, please wait.." isOpen={isLoading} />
    );
};

export default EditProduct;
