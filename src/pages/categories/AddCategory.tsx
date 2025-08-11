import CustomFormikInput from "@/components/shared/CustomFormikInput";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { useAddCategory } from "@/lib/api/categories";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Category name must be at least 2 characters long")
    .required("Required"),
});

const AddCategories = () => {
  const navigate = useNavigate();
  const addCategoryMutate = useAddCategory();

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addCategoryMutate.mutateAsync(values);
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
            addButtonText="Add Category"
            addButtonFunc={() => {}}
            addButtonType="submit"
            removeButtonFunc={() => navigate(-1)}
            removeButtonText="Cancel"
          />

          <div className="space-y-[1.5rem]">
            <CustomFormikInput
              name="name"
              label="Category Name"
              placeholder="Food and Edibles"
              type="text"
            />
          </div>
        </Form>
      </Formik>
      <LoadingSpinnerModal isOpen={addCategoryMutate.isPending} />
    </div>
  );
};

export default AddCategories;
