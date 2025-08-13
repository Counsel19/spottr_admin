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
  useGetSubscriptionPlanById,
  useToggleSubscriptionPlanStatus,
  useUpdateSubscriptionPlanDetails,
  useUpdateSubscriptionPlanImage,
} from "@/lib/api/subscription";
import { Pen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubcriptionPlanFeatureTable from "@/components/subscription/SubscriptionPlanFeatureTable";

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

  const { data, isLoading } = useGetSubscriptionPlanById(planId)

  const updateSubscriptionPlanImageMutate = useUpdateSubscriptionPlanImage();
  const updateSubscriptionPlanDetailsMutate =
    useUpdateSubscriptionPlanDetails();
  const toggleSubscriptionPlanStatusMutate = useToggleSubscriptionPlanStatus();
 

  return (
    data && !isLoading ?
      <div className="">
        <Formik
          initialValues={{
            name: data.name,
            amount: data.amount,
            image: data.image,

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
                <div className="space-y-[6rem]">

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
                      className="text-white font-medium rounded-md px-4"
                    >
                      <Pen className="size-6" />
                      Update Details
                    </Button>
                  </div>
                  <div className="space-y-[2rem]">
                    <div className="flex justify-between">
                    <div className="space-y-[1rem]">
                      <h4 className="text-[1.8rem] font-bold">Subcription Plan Features </h4>
                      <p className="text-[1.4rem]">  Below is the list of Features for this subscription plan</p>
                    </div>
                    <Button className="rounded-md">
                      <Plus className="size-8" />
                    </Button>
                    </div>
                    <SubcriptionPlanFeatureTable featureData={data.features} />
                  </div>
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
                      className="text-white font-medium rounded-md px-4"
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
      </div> : <LoadingSpinnerModal isOpen={isLoading} />
  );
};

export default EditSubscriptionPlan;
