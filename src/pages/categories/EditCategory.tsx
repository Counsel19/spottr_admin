import CustomFormikInput from "@/components/shared/CustomFormikInput";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { useEditCategory, useGetCategoryByID } from "@/lib/api/categories";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Category name must be at least 2 characters long")
        .required("Required"),

});

const EditCategory = () => {
    const navigate = useNavigate();

    const { categoryId } = useParams()
    const updateCategoryMutate = useEditCategory();

    const { data, isLoading } = useGetCategoryByID(categoryId);

    return (
        data && !isLoading ?
            <div className="">
                <Formik
                    initialValues={{
                        name: data.name,

                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        if (!categoryId) return toast.error("No Category Id Selected")
                        try {
                            await updateCategoryMutate.mutateAsync(
                                {
                                    data: values,
                                    categoryId
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
                    <Form className="p-[1rem] space-y-[4rem] ">
                        <SecondaryHeader
                            title="Edit Category"
                            subTitle="Fill detail to update Category "
                            addButtonText="Update category"
                            addButtonFunc={() => { }}
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


                        </div>
                    </Form>
                </Formik>
                <LoadingSpinnerModal isOpen={updateCategoryMutate.isPending} />
            </div> : <LoadingSpinnerModal isOpen={isLoading} />
    );
};

export default EditCategory;
