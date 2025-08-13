import CustomFormikInput from "@/components/shared/CustomFormikInput";
import CustomFormikSelect from "@/components/shared/CustomFormikSelect";
import CustomFormikTextarea from "@/components/shared/CustomFormikTextarea";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import UploadImgArea from "@/components/shared/molecules/UploadArea";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetIndustries } from "@/lib/api/industries";
import { useUpdateCorporateUser } from "@/lib/api/userManagement";
import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
    companyName: Yup.string()
        .min(3, "Company name must be at least 3 characters long")
        .required("Required"),
    companyAddress: Yup.string()
        .min(3, "Address must be at least 3 characters long")
        .required("Required"),
    companyDescription: Yup.string()
        .min(10, "Description must be at least 10 characters long")
        .required("Required"),
    industryId: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    pic: Yup.mixed<File>()
        .required("Profile image is required")
        .test(
            "fileSize",
            "Image too large",
            (value) => !value || value.size <= 5 * 1024 * 1024
        ), // 5MB
    kycDoc: Yup.mixed<File>()
        .required("KYC Document is required")
        .test(
            "fileSize",
            "File too large",
            (value) => !value || value.size <= 10 * 1024 * 1024
        ), // 10MB
});

const EditCorporateUser = () => {
    const navigate = useNavigate();
    const [searchIndustries, setSearchIndustries] = useState("");

    const deboucedSearchValue = useDebounce(searchIndustries, 2000);

    const { data, isLoading } = useGetIndustries({
        per_page: 20,
        search: deboucedSearchValue,
    });

    const updateCorporateUserMutate = useUpdateCorporateUser();

    return (
        <div className="">
            <Formik
                initialValues={{
                    companyName: "",
                    companyAddress: "",
                    companyDescription: "",
                    industryId: "",
                    phone: "",
                    email: "",
                    pic: null,
                    kycDoc: null,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const formData = new FormData();
                        formData.append("company_name", values.companyName);
                        formData.append("company_address", values.companyAddress);
                        formData.append("company_description", values.companyDescription);
                        formData.append("industry_id", values.industryId);
                        formData.append("phone", values.phone);
                        formData.append("email", values.email);
                        formData.append("pic", values.pic!);
                        formData.append("kyc_doc", values.kycDoc!);

                        await updateCorporateUserMutate.mutateAsync({
                            data: formData,
                            corporateId: ""
                        });

                        resetForm()
                    } catch (error) {
                        if (error instanceof Error) {
                            return toast.error(error.message);
                        }
                        return toast.error("Could not update Corporate User ");
                    }
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="p-[1rem] space-y-[4rem] ">
                        <SecondaryHeader
                            title="Update Corporate"
                            subTitle="Fill details to add new corporate user"
                            addButtonText="Update Corporate"
                            addButtonFunc={() => { }}
                            addButtonType="submit"
                            removeButtonFunc={() => navigate(-1)}
                            removeButtonText="Cancel"
                        />
                        <div className="grid gap-[4rem] grid-cols-[3fr_2fr]">
                            <div className="space-y-[1.5rem]">
                                <CustomFormikInput
                                    name="companyName"
                                    label="Company Name"
                                    placeholder="Company Inc"
                                    type="text"
                                />
                                <CustomFormikInput
                                    name="companyAddress"
                                    label="Company Address"
                                    placeholder="Company Inc"
                                    type="text"
                                />
                                <CustomFormikTextarea
                                    name="companyDescription"
                                    label="Company Description"
                                    placeholder="Description goes here..."
                                    rows={100}
                                />

                                <CustomFormikSelect
                                    label="Select Industry"
                                    name="industryId"
                                    placeholder="Select Industry"
                                    className="bg-white"
                                >
                                    <SelectContent>
                                        <Input
                                            onChange={(e) => setSearchIndustries(e.target.value)}
                                            value={searchIndustries}
                                            placeholder="Search Industries here..."
                                            className="mb-6"
                                        />
                                        {data && !isLoading ? (
                                            data.data.map((industry) => (
                                                <SelectItem
                                                    className="text-lg p-3"
                                                    key={industry.id}
                                                    value={industry.id || ""}
                                                >
                                                    {industry.name}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <div className="grid place-content-center p-[2rem]">
                                                <Loader2 />
                                            </div>
                                        )}
                                    </SelectContent>
                                </CustomFormikSelect>

                                <div className="grid grid-cols-2 gap-[1rem]">
                                    <CustomFormikInput
                                        name="email"
                                        label="Email"
                                        placeholder="name@email.com"
                                        type="email"
                                    />

                                    <CustomFormikInput
                                        name="phone"
                                        label="Phone"
                                        placeholder="08022222222"
                                        type="text"
                                    />
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
                                        Pic
                                    </label>
                                    <UploadImgArea name="pic" setFieldValue={setFieldValue} />
                                </div>
                                <div className="space-y-4">
                                    <label
                                        className={cn(
                                            `font-medium text-[1.4rem] flex mb-4  text-gray-700  leading-[2.03rem]`
                                        )}
                                        htmlFor=""
                                    >
                                        KYC Document
                                    </label>
                                    <UploadImgArea name="kycDoc" setFieldValue={setFieldValue} />
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            <LoadingSpinnerModal isOpen={updateCorporateUserMutate.isPending} />
        </div>
    );
};

export default EditCorporateUser;
