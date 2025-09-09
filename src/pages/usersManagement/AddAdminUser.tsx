import CustomFormikInput from "@/components/shared/CustomFormikInput";
import CustomFormikSelect from "@/components/shared/CustomFormikSelect";
import LoadingSpinnerModal from "@/components/shared/LoadingSpinnerModal";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

import { SelectContent, SelectItem } from "@/components/ui/select";

import { useAddAdminUser } from "@/lib/api/userManagement";

import { Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  role: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  user_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const AddAdminUser = () => {
  const navigate = useNavigate();

  const addAdminUserMutate = useAddAdminUser();

  return (
    <div className="">
      <Formik
        initialValues={{
          phone: "",
          email: "",
          role: "",
          user_name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addAdminUserMutate.mutateAsync(values);

            resetForm();
          } catch (error) {
            if (error instanceof Error) {
              return toast.error(error.message);
            }
            return toast.error("Could not create new Corporate User ");
          }
        }}
      >
        {() => (
          <Form className="p-[1rem] space-y-[4rem] ">
            <SecondaryHeader
              title="Add New Admin"
              subTitle="Fill details to add new corporate user"
              addButtonText="Add Admin"
              addButtonFunc={() => {}}
              addButtonType="submit"
              removeButtonFunc={() => navigate(-1)}
              removeButtonText="Cancel"
            />
            <div className="grid gap-[4rem]">
              <div className="space-y-[1.5rem]">
                <CustomFormikInput
                  name="email"
                  label="Email"
                  placeholder="name@mail.com"
                  type="text"
                />
                <CustomFormikInput
                  name="phone"
                  label="Phone"
                  placeholder="0800 000 0000"
                  type="text"
                />
                <CustomFormikInput
                  name="user_name"
                  label="Username"
                  placeholder="sample_admin"
                  type="text"
                />

                <CustomFormikSelect
                  label="Select Role"
                  name="role"
                  placeholder="Select Roole"
                  className="bg-white"
                >
                  <SelectContent>
                    {["admin", "super_admin"].map((role, index) => (
                      <SelectItem
                        className="text-lg p-3"
                        key={index}
                        value={role}
                      >
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </CustomFormikSelect>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <LoadingSpinnerModal isOpen={addAdminUserMutate.isPending} />
    </div>
  );
};

export default AddAdminUser;
