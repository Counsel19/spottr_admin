import CustomFormikInput from "@/components/shared/CustomFormikInput";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { useEditIndustry, useGetIndustryById } from "@/lib/api/industries";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Industry name must be at least 2 characters long")
        .required("Required"),
});

const EditIndustry = () => {
    const navigate = useNavigate();
    const { industryId } = useParams()

    const updateIndustryMutate = useEditIndustry();
    const { data, isLoading } = useGetIndustryById(industryId);

    return (
        data && !isLoading ?
            <div className="">
                <Formik
                    initialValues={{
                        name: data.name,
                    }}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={async (values,) => {
                        try {
                            if (!industryId) return toast.error("Please select a industry Id")
                            await updateIndustryMutate.mutateAsync({
                                data: values,
                                industryId
                            });

                        } catch (error) {
                            if (error instanceof Error) {
                                return toast.error(error.message);
                            }
                            return toast.error("Could not edit Industry ");
                        }
                    }}
                >
                    <Form className="p-[1rem] space-y-[4rem] ">
                        <SecondaryHeader
                            title="Add New Industry"
                            subTitle="Fill detail to update Industry "
                            addButtonText="Update industry"
                            addButtonFunc={() => { }}
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
                <LoadingSpinnerModal isOpen={updateIndustryMutate.isPending} />


            </div> : <LoadingSpinnerModal isOpen={isLoading} />

    );
};

export default EditIndustry;
