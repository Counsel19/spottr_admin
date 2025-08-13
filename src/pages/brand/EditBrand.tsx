import CustomFormikInput from "@/components/shared/CustomFormikInput";
import CustomFormikSelect from "@/components/shared/CustomFormikSelect";
import CustomFormikTextarea from "@/components/shared/CustomFormikTextarea";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import UploadImgArea from "@/components/shared/molecules/UploadArea";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { useEditBrand, useGetBrandById } from "@/lib/api/brand";
import { useGetCategories } from "@/lib/api/categories";
import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Brand name must be at least 2 characters long")
        .required("Required"),
    description: Yup.string()
        .min(10, "Description must be at least 10 characters long")
        .required("Required"),
    categoryId: Yup.string().required("Required"),
    image: Yup.mixed<File>()
        .required("Image is required")
        .test(
            "fileSize",
            "Image too large",
            (value) => !value || value.size <= 5 * 1024 * 1024
        ), // 5MB
});

const EditBrand = () => {
    const navigate = useNavigate();
    const [searchCategories, setSearchCategories] = useState("");
    const deboucedSearchValue = useDebounce(searchCategories, 2000);

    const { brandId } = useParams()
    const updateBrandMutate = useEditBrand();
    const { data: categoryData, isLoading: categoryIsLoading } = useGetCategories({

        search: deboucedSearchValue,
    });

    const { data, isLoading } = useGetBrandById(brandId);

    return (
        data && !isLoading ?
            <div className="">
                <Formik
                    initialValues={{
                        name: data.name,
                        image: data.image,
                        categoryId: data.category_id,
                        description: data.description,

                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        if (!brandId) return toast.error("No Brand Id Selected")
                        try {
                            const formData = new FormData();
                            formData.append("name", values.name);
                            formData.append("description", values.description);
                            formData.append("category_id", values.categoryId);
                            formData.append("_method", "PUT");
                            if (typeof values.image != "string") {
                                formData.append("image", values.image!);
                            }

                            await updateBrandMutate.mutateAsync(
                                {
                                    data: formData,
                                    brandId
                                }

                            );

                        } catch (error) {
                            if (error instanceof Error) {
                                return toast.error(error.message);
                            }
                            return toast.error("Could not updated Category ");
                        }
                    }}

                >

                    {({ setFieldValue, values }) => (
                        <Form className="p-[1rem] space-y-[4rem] ">
                            <SecondaryHeader
                                title="Edit Brands"
                                subTitle="Fill details to update Brand"
                                addButtonText="Update Brands"
                                addButtonFunc={() => { }}
                                addButtonType="submit"
                                removeButtonFunc={() => navigate(-1)}
                                removeButtonText="Cancel"
                            />

                            <div className="grid gap-[4rem] grid-cols-[3fr_2fr]">
                                <div className="space-y-[1.5rem]">
                                    <CustomFormikInput
                                        name="name"
                                        label="Brand Name"
                                        placeholder="Adidas"
                                        type="text"
                                    />

                                    <CustomFormikTextarea
                                        name="description"
                                        label="Brand Description"
                                        placeholder="Description goes here..."
                                        rows={100}
                                    />

                                    <CustomFormikSelect
                                        label="Select Category"
                                        name="categoryId"
                                        placeholder="Select Category"
                                        className="bg-white"
                                    >
                                        <SelectContent>
                                            <Input
                                                onChange={(e) => setSearchCategories(e.target.value)}
                                                value={searchCategories}
                                                placeholder="Search Categories here..."
                                                className="mb-6"
                                            />
                                            {categoryData && !categoryIsLoading ? (
                                                categoryData.data.map((category) => (
                                                    <SelectItem
                                                        className="text-lg p-3"
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
                                </div>

                                <div className="space-y-[2rem]">
                                    <div className="space-y-4">
                                        <label
                                            className={cn(
                                                `font-medium text-[1.4rem] flex mb-4  text-gray-700  leading-[2.03rem]`
                                            )}
                                            htmlFor=""
                                        >
                                            Image
                                        </label>
                                        <UploadImgArea imageURL={values.image} name="image" setFieldValue={setFieldValue} />
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}

                </Formik>
                <LoadingSpinnerModal isOpen={updateBrandMutate.isPending} />
            </div> : <LoadingSpinnerModal isOpen={isLoading} />
    );
};

export default EditBrand;
