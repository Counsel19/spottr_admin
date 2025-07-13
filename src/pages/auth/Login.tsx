import IconTextButton from "@/components/shared/molecules/IconTextButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routeConstants from "@/constants/routes";
import { MoveLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[4rem] space-y-[2rem]">
      <IconTextButton
        icon={<MoveLeft className="size-8" />}
        cta="Go back"
        onClick={() => navigate(-1)}
      />

      <h3 className="text-[2.4rem] text-primary font-bold leading-[2.4rem]">
        Login to your account
      </h3>

      <form className="space-y-[1rem]">
        <Input placeholder="name@email.com" type="email" />
        <Input placeholder="Password" type="password" />
        <div className="flex justify-end text-primary text-[1.4rem]">
          <Link to={routeConstants.forgetPassword}>Forgot Password?</Link>
        </div>

        {/* <div className="my-[4rem] flex flex-col items-center gap-[2rem]">
          <span className="text-[1.4rem] text-center">Or use</span>

          <div className="flex gap-[1rem] items-center w-fit">
            <IconTextButton
              className="font-bold text-[1.6rem] text-primary"
              cta="Facebook"
              variant={"outline"}
              icon={<img src="/icons/facebook.svg" />}
            />
            <IconTextButton
              className="font-bold text-[1.6rem] "
              cta="Google"
              variant={"outline"}
              icon={<img src="/icons/google.svg" />}
            />
          </div>
        </div> */}

        <Button onClick={() =>navigate(routeConstants.dashboard) } className="w-full">Continue</Button>
      </form>
    </div>
  );
};

export default Login;
