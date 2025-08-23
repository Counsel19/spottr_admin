import IconTextButton from "@/components/shared/molecules/IconTextButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[4rem] space-y-[2rem]">
      <IconTextButton
        icon={<MoveLeft size={30} />}
        cta="Go back"
        onClick={() => navigate(-1)}
      />

      <h3 className="text-[2.4rem] text-primary font-bold leading-[2.4rem]">
        Reset Password
      </h3>

      <form className="space-y-[2rem]">
        <div className="grid gap-[1rem]">
          <label
            htmlFor="otp"
            className="font-semibold text-[1.5rem] text-primary"
          >
            Enter Password
          </label>
          <Input placeholder="Password" name="password" type="password" />
        </div>
        <div className="grid gap-[1rem]">
          <label
            htmlFor="otp"
            className="font-semibold text-[1.5rem] text-primary"
          >
            Enter Confirm Password
          </label>
          <Input placeholder="Password" name="resetPassword" type="password" />
        </div>

        <ul className="text-[1.4rem] mt-[2rem]">
          <li> 12 Characters, Minimum</li>
          <li>Includes Number</li>
          <li>Symbols</li>
          <li>Capital Letter</li>
          <li>Lower-Case Letter</li>
        </ul>

        <Button className="w-full">Continue</Button>
      </form>
    </div>
  );
};

export default Login;
