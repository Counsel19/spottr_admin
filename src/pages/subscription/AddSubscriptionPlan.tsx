import CustomFormikInput from "@/components/shared/CustomFormikInput";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import UploadImgArea from "@/components/shared/molecules/UploadArea";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import { useAddSbscriptionPlan } from "@/lib/api/subscription";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Subscription name must be at least 2 characters long")
    .required("Required"),
  amount: Yup.string().required("Required"),
  image: Yup.mixed<File>()
    .required("Image is required")
    .test(
      "fileSize",
      "Image too large",
      (value) => !value || value.size <= 5 * 1024 * 1024
    ), // 5MB
});

const AddSubscriptionPlan = () => {
  const navigate = useNavigate();

  const addSubscriptionPlanMutate = useAddSbscriptionPlan();

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          amount: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("amount", values.amount);
            formData.append("image", values.image!);

            await addSubscriptionPlanMutate.mutateAsync(formData);

            resetForm();
          } catch (error) {
            if (error instanceof Error) {
              return toast.error(error.message);
            }
            return toast.error("Could not create new Subscription Plan ");
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className="p-[1rem] space-y-[4rem] ">
            <SecondaryHeader
              title="Add New Subscription Plan"
              subTitle="Fill details to add new Subscription Plan "
              addButtonText="Add Subscription Plan"
              addButtonFunc={() => {}}
              addButtonType="submit"
              removeButtonFunc={() => navigate(-1)}
              removeButtonText="Cancel"
            />
            <div className="grid gap-[4rem] grid-cols-[3fr_2fr]">
              <div className="space-y-[1.5rem]">
                <CustomFormikInput
                  name="name"
                  label="Plan Name"
                  placeholder="Regular"
                  type="text"
                />
                <CustomFormikInput
                  name="amount"
                  label="Plan Amount"
                  placeholder="20000"
                  type="text"
                />
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

      <LoadingSpinnerModal isOpen={addSubscriptionPlanMutate.isPending} />
    </div>
  );
};

export default AddSubscriptionPlan;
