import CustomFormikInput from "@/components/shared/CustomFormikInput";
import CustomFormikSelect from "@/components/shared/CustomFormikSelect";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { useAddSubcategory, useGetCategories } from "@/lib/api/categories";
import { Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Category name must be at least 2 characters long")
    .required("Required"),
  categoryId: Yup.string().required("Required"),
});

const AddSubcategories = () => {
  const navigate = useNavigate();
  const addCategoryMutate = useAddSubcategory();

  const [searchCategories, setSearchCategories] = useState("");

  const deboucedSearchValue = useDebounce(searchCategories, 2000);

  const { data, isLoading } = useGetCategories({
    per_page: 20,
    search: deboucedSearchValue,
  });

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          categoryId: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addCategoryMutate.mutateAsync({
              name: values.name,
              category_id: values.categoryId,
            });
            resetForm();
          } catch (error) {
            if (error instanceof Error) {
              return toast.error(error.message);
            }
            return toast.error("Could not add Categories ");
          }
        }}
      >
        <Form className="p-[1rem] space-y-[4rem] ">
          <SecondaryHeader
            title="Add New Category"
            subTitle="Fill detail to add new Category "
            addButtonText="Add category"
            addButtonFunc={() => {}}
            addButtonType="submit"
            removeButtonFunc={() => navigate(-1)}
            removeButtonText="Cancel"
          />

          <div className="space-y-[1.5rem]">
            <CustomFormikInput
              name="name"
              label="Category Name"
              placeholder="Health"
              type="text"
            />

            <CustomFormikSelect
              label="Parent Category"
              name="categoryId"
              placeholder="Select Parent Category"
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
        </Form>
      </Formik>
      <LoadingSpinnerModal isOpen={addCategoryMutate.isPending} />
    </div>
  );
};

export default AddSubcategories;
