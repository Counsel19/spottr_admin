import CustomFormikInput from "@/components/shared/CustomFormikInput";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { useAddIndustry } from "@/lib/api/industries";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Industry name must be at least 2 characters long")
    .required("Required"),
});

const AddIndustries = () => {
  const navigate = useNavigate();
  const addIndustryMutate = useAddIndustry();

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addIndustryMutate.mutateAsync(values);
            resetForm();
          } catch (error) {
            if (error instanceof Error) {
              return toast.error(error.message);
            }
            return toast.error("Could not add Industries ");
          }
        }}
      >
        <Form className="p-[1rem] space-y-[4rem] ">
          <SecondaryHeader
            title="Add New Industry"
            subTitle="Fill detail to add new Industry "
            addButtonText="Add industry"
            addButtonFunc={() => {}}
            addButtonType="submit"
            removeButtonFunc={() => navigate(-1)}
            removeButtonText="Cancel"
          />

          <div className="space-y-[1.5rem]">
            <CustomFormikInput
              name="name"
              label="Industry Name"
              placeholder="Health"
              type="text"
            />
          </div>
        </Form>
      </Formik>
      <LoadingSpinnerModal isOpen={addIndustryMutate.isPending} />
    </div>
  );
};

export default AddIndustries;
