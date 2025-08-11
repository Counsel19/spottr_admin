import CustomFormikInput from "@/components/shared/CustomFormikInput";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import UploadImgArea from "@/components/shared/molecules/UploadArea";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import {
  //   useAddFeatureToSubscriptionPlan,
  //   useDeleteSubscriptionPlan,
  //   useRemoveFeatureToSubscriptionPlan,
  useToggleSubscriptionPlanStatus,
  useUpdateSubscriptionPlanDetails,
  useUpdateSubscriptionPlanImage,
} from "@/lib/api/subscription";
import { Pen } from "lucide-react";
import { Button } from "@/components/ui/button";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Subscription Plan name must be at least 2 characters long")
    .required("Required"),
  amount: Yup.string().required("Required"),
  image: Yup.mixed<File>().test(
    "fileSize",
    "Image too large",
    (value) => !value || value.size <= 5 * 1024 * 1024
  ), // 5MB
});

const EditSubscriptionPlan = () => {
  const navigate = useNavigate();
  const { planId } = useParams();

  const updateSubscriptionPlanImageMutate = useUpdateSubscriptionPlanImage();
  const updateSubscriptionPlanDetailsMutate =
    useUpdateSubscriptionPlanDetails();
  const toggleSubscriptionPlanStatusMutate = useToggleSubscriptionPlanStatus();
  //   const addFeatureToSubscriptionPlanMutate = useAddFeatureToSubscriptionPlan();
  //   const removeFeatureToSubscriptionPlanMutate =
  //     useRemoveFeatureToSubscriptionPlan();
  //   const deleteSubscriptionPlanMutate = useDeleteSubscriptionPlan();

  //   const handleUploadImage = async () => {
  //     const formData = new FormData();
  //     formData.append("image");
  //     updateSubscriptionPlanImageMutate.mutate();
  //   };

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
          if (!planId) return toast.error("No Plan Id Selected ");
          try {
            await updateSubscriptionPlanDetailsMutate.mutateAsync({
              amount: values.amount,
              id: planId,
              name: values.name,
            });

            resetForm();
          } catch (error) {
            if (error instanceof Error) {
              return toast.error(error.message);
            }
            return toast.error("Could not Edit Subscription Plan ");
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className="p-[1rem] space-y-[4rem] ">
            <SecondaryHeader
              title="Edit Subscription Plan"
              subTitle="Fill details to update Subscription Plan "
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

                <Button
                  type="button"
                  className="text-white font-medium rounded-[3rem]"
                >
                  <Pen className="size-6" />
                  Update Details
                </Button>
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

                  <Button
                    type="button"
                    className="text-white font-medium rounded-[3rem]"
                  >
                    <Pen className="size-6" />
                    Save Image
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <LoadingSpinnerModal
        isOpen={
          updateSubscriptionPlanImageMutate.isPending ||
          updateSubscriptionPlanDetailsMutate.isPending ||
          toggleSubscriptionPlanStatusMutate.isPending
        }
      />
    </div>
  );
};

export default EditSubscriptionPlan;
