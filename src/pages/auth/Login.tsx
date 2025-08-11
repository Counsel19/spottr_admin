import IconTextButton from "@/components/shared/molecules/IconTextButton";
import { Button } from "@/components/ui/button";
import routeConstants from "@/constants/routes";
import { MoveLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useLogin } from "@/lib/api/auth";
import CustomFormikInput from "@/components/shared/CustomFormikInput";
import { toast } from "sonner";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const loginMutation = useLogin();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          await loginMutation.mutateAsync(values);
          navigate(routeConstants.dashboard);
        } catch (error) {
          if (error instanceof Error) {
            return toast.error(error.message);
          }
          return toast.error("Could not Authenticate user ");
        }
      }}
    >
      <div className="p-[4rem] space-y-[2rem]">
        <IconTextButton
          icon={<MoveLeft className="size-8" />}
          cta="Go back"
          onClick={() => navigate(-1)}
        />

        <div className=" mt-[8rem] h-full">
          <div className="w-full space-y-[3rem]">
            <h3 className="text-[2.4rem] text-primary font-bold leading-[2.4rem]">
              Login to your account
            </h3>

            <Form className="space-y-[1rem]">
              <CustomFormikInput
                name="email"
                label="Email"
                placeholder="name@email.com"
                type="email"
              />
              <CustomFormikInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />

              <div className="flex justify-end text-primary text-[1.4rem]">
                <Link to={routeConstants.forgetPassword}>Forgot Password?</Link>
              </div>

              <Button isLoading={loginMutation.isPending} className="w-full">
                Continue
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Login;
