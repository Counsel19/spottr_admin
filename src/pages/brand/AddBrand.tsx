import CustomFormikInput from "@/components/shared/CustomFormikInput";
import CustomFormikSelect from "@/components/shared/CustomFormikSelect";
import CustomFormikTextarea from "@/components/shared/CustomFormikTextarea";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import UploadImgArea from "@/components/shared/molecules/UploadArea";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { useAddBrand } from "@/lib/api/brand";
import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import { useGetCategories } from "@/lib/api/categories";

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

const AddBrand = () => {
  const navigate = useNavigate();
  const [searchCategories, setSearchCategories] = useState("");

  const deboucedSearchValue = useDebounce(searchCategories, 2000);

  const { data, isLoading } = useGetCategories({
    per_page: 20,
    search: deboucedSearchValue,
  });

  const addCorporateUserMutate = useAddBrand();

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          image: null,
          categoryId: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("category_id", values.categoryId);
            formData.append("image", values.image!);

            await addCorporateUserMutate.mutateAsync(formData);

            resetForm();
          } catch (error) {
            if (error instanceof Error) {
              return toast.error(error.message);
            }
            return toast.error("Could not create new Brand ");
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className="p-[1rem] space-y-[4rem] ">
            <SecondaryHeader
              title="Add New Brands"
              subTitle="Fill details to add new Brand"
              addButtonText="Add Brands"
              addButtonFunc={() => {}}
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
                    {data && !isLoading ? (
                      data.data.map((category) => (
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
                  <UploadImgArea name="image" setFieldValue={setFieldValue} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <LoadingSpinnerModal isOpen={addCorporateUserMutate.isPending} />
    </div>
  );
};

export default AddBrand;
