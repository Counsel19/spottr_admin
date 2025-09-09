import { IoCheckmarkCircle, IoWarning } from "react-icons/io5";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import type React from "react";
import { useGetBrands } from "@/lib/api/brand";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import CustomFormikSelect from "./CustomFormikSelect";
import { SelectContent, SelectItem } from "../ui/select";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { UserRoles } from "@/constants/enums";
import { useGetAllUsers } from "@/lib/api/userManagement";

type setSelectedProductRequestDetailsType = React.Dispatch<
  React.SetStateAction<{
    id: string;
    isApprove: boolean;
    brandId?: string;
    corporateProfileId?: string;
    name: string;
  } | null>
>;
interface ConfirmationModalProps {
  title: string;
  description: string;
  proceedFunc: VoidFunction;
  cancelFunc: VoidFunction;
  isLoading: boolean;
  type: "danger" | "success";
  reason?: string;
  setReason?: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProductRequestDetails?: setSelectedProductRequestDetailsType;
}
const ConfirmationModal = ({
  isLoading,
  description,
  title,
  cancelFunc,
  proceedFunc,
  reason,
  setReason,
  setSelectedProductRequestDetails,
  type,
}: ConfirmationModalProps) => {
  const [disableProceed, setDisableProceed] = useState(false);

  const formRef = useRef<(() => void) | null>(null);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex  min-h-full items-end justify-center p-[4rem] text-center sm:items-center ">
          <div className="relative space-y-[1.8rem] p-[1rem] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[35%]">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={cn(
                    "mx-auto flex items-center justify-center rounded-full p-2",
                    type == "danger" ? "bg-red-100" : "bg-green-100"
                  )}
                >
                  {type === "danger" ? (
                    <IoWarning className="size-16 text-red-600" />
                  ) : (
                    <IoCheckmarkCircle className="size-16 text-green-600" />
                  )}
                </div>
                <div className="mt-6 text-center  space-y-[1rem] sm:ml-4 sm:text-left">
                  <h3
                    className="text-[1.8rem] leading-[2rem] font-semibold text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="mt-4">
                    <p className="text-[1.4rem] leading-[1.8rem] text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              {setSelectedProductRequestDetails ? (
                <BrandsCorporateProfileInput
                  setDisableProceed={setDisableProceed}
                  setSelectedProductRequestDetails={
                    setSelectedProductRequestDetails
                  }
                  formRef={formRef}
                />
              ) : null}
              {setReason ? (
                <div className="mt-4">
                  <Textarea
                    value={reason}
                    className="h-[7rem]"
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter Your Reason"
                  />
                </div>
              ) : null}
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Button
                onClick={() => {
                  if (formRef.current) {
                    formRef.current();
                  }
                  proceedFunc();
                }}
                disabled={isLoading || disableProceed}
                isLoading={isLoading}
                type="button"
                size={"sm"}
                className={cn(
                  "inline-flex w-full justify-center rounded-md   text-white shadow-xs  sm:ml-3 sm:w-auto",
                  type == "danger"
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-green-600 hover:bg-green-500"
                )}
              >
                {isLoading ? "Processing..." : "Proceed"}
              </Button>
              <Button
                onClick={cancelFunc}
                type="button"
                size={"sm"}
                className="inline-flex w-full  justify-center rounded-md bg-gray-500  text-white shadow-xs hover:bg-gray-400 sm:ml-3 sm:w-auto"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

const DisableProceedWatcher = ({
  setDisableProceed,
  formRef,
}: {
  formRef: React.RefObject<(() => void) | null>;
  setDisableProceed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { errors, submitForm } = useFormikContext<unknown>();

  formRef.current = submitForm;

  useEffect(() => {
    setDisableProceed(Object.keys(errors).length > 0);
  }, [errors, setDisableProceed]);

  return null;
};

const BrandsCorporateProfileInput = ({
  setSelectedProductRequestDetails,
  setDisableProceed,
  formRef,
}: {
  formRef: React.RefObject<(() => void) | null>;
  setDisableProceed: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProductRequestDetails: setSelectedProductRequestDetailsType;
}) => {
  const validationSchema = Yup.object({
    brandId: Yup.string().required("Required"),
    corporateProfileId: Yup.string().required("Required"),
  });

  const [searchBrands, setSearchBrands] = useState("");
  const [searchCorporate, setSearchCorporate] = useState("");

  const debounceBrandSearch = useDebounce(searchBrands, 2000);
  const debounceCorporateSearch = useDebounce(searchCorporate, 2000);

  const { data: brandsData, isLoading: isBrandsLoading } = useGetBrands({
    search: debounceBrandSearch,
  });

  const { data: corporateData, isLoading: isCorporateLoading } = useGetAllUsers(
    {
      role: UserRoles.corporate,
      per_page: 20,
      search: debounceCorporateSearch,
    }
  );
  return (
    <Formik
      initialValues={{ brandId: "", corporateProfileId: "" }}
      validationSchema={validationSchema}
      onSubmit={({ brandId, corporateProfileId }) => {
        setSelectedProductRequestDetails((v) =>
          v
            ? {
                ...v,
                brandId,
                corporateProfileId,
              }
            : null
        );
      }}
    >
      <Form className="p-[1rem] space-y-[1rem]">
        <DisableProceedWatcher
          formRef={formRef}
          setDisableProceed={setDisableProceed}
        />
        {/* Brand select */}
        <CustomFormikSelect
          label="Select Brand"
          name="brandId"
          placeholder="Select Brand"
          className="bg-white"
        >
          <SelectContent>
            <Input
              onChange={(e) => setSearchBrands(e.target.value)}
              value={searchBrands}
              placeholder="Search brands here..."
              className="mb-6"
            />
            {brandsData && !isBrandsLoading ? (
              brandsData?.data?.map((brand) => (
                <SelectItem
                  className="text-[1.4rem] p-3"
                  key={brand.id}
                  value={brand.id || ""}
                >
                  {brand.name}
                </SelectItem>
              ))
            ) : (
              <div className="grid place-content-center p-[2rem]">
                <Loader2 />
              </div>
            )}
          </SelectContent>
        </CustomFormikSelect>

        {/* Corporate select */}
        <CustomFormikSelect
          label="Select Corporate"
          name="corporateProfileId"
          placeholder="Select Corporate"
          className="bg-white"
        >
          <SelectContent>
            <Input
              onChange={(e) => setSearchCorporate(e.target.value)}
              value={searchCorporate}
              placeholder="Search Corporate here..."
              className="mb-6"
            />
            {corporateData && !isCorporateLoading ? (
              (corporateData?.data as ICorporateUser[])?.map((corporate) => (
                <SelectItem
                  className="text-[1.4rem] p-3"
                  key={corporate.id}
                  value={corporate?.profile?.id || ""}
                >
                  {corporate?.profile?.company_name || corporate.user_name}
                </SelectItem>
              ))
            ) : (
              <div className="grid place-content-center p-[2rem]">
                <Loader2 />
              </div>
            )}
          </SelectContent>
        </CustomFormikSelect>
      </Form>
    </Formik>
  );
};
