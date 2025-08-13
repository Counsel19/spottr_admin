import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAddFeatureToSubscriptionPlan } from "@/lib/api/subscription";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import CustomFormikInput from "../shared/CustomFormikInput";
import CustomFormikSelect from "../shared/CustomFormikSelect";
import { SelectContent, SelectItem } from "../ui/select";


interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const validationSchema = Yup.object({
    feature: Yup.string()
        .min(2, "Feature must be at least 2 characters long")
        .required("Required"),
    value: Yup.string()
        .required("Required"),

});

const AddFeatureModal = ({ isOpen, onClose }: Props) => {

    const addFeatureToSubscriptionPlanMutate = useAddFeatureToSubscriptionPlan();
    const { planId } = useParams()

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[95vh] overflow-y-auto p-[3rem] rounded-[3rem] scrollbar-hide">
                <DialogHeader className="space-y-4">
                    <DialogTitle className="text-2xl font-bold text-center">
                        Add Plan Feature
                    </DialogTitle>

                </DialogHeader>
                <Formik
                    initialValues={{
                        feature: "",
                        value: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            if (!planId) return toast.error("No Plan Selected")

                                console.log(values)
                            await addFeatureToSubscriptionPlanMutate.mutateAsync({
                                ...values,
                                id: planId
                            });

                            resetForm();
                            onClose()
                        } catch (error) {
                            if (error instanceof Error) {
                                return toast.error(error.message);
                            }
                            return toast.error("Could not add new Feature ");
                        }
                    }}
                >
                    {() => (
                        <Form className="p-[1rem] space-y-[4rem] ">
                            <div className="space-y-[1.5rem]">
                                <CustomFormikInput
                                    name="feature"
                                    label="Feature"
                                    placeholder="can create task"
                                    type="text"
                                />

                                <CustomFormikSelect
                                    label="Select Value"
                                    name="value"
                                    placeholder="Select Value"
                                    className="bg-white"
                                >
                                    <SelectContent>
                                        <SelectItem
                                            className="text-lg p-3"
                                            value={"yes"}
                                        >
                                            Yes
                                        </SelectItem>
                                        <SelectItem
                                            className="text-lg p-3"
                                            value={"no"}
                                        >
                                            No
                                        </SelectItem>
                                    </SelectContent>
                                </CustomFormikSelect>
                            </div>

                            <div className="flex justify-end pt-6 border-t">
                                <Button type="submit"  isLoading={addFeatureToSubscriptionPlanMutate.isPending}>Add plan </Button>
                            </div>
                        </Form>
                    )}
                </Formik>


            </DialogContent>
        </Dialog>
    )
}

export default AddFeatureModal