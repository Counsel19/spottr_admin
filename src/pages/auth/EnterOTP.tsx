import IconTextButton from "@/components/shared/molecules/IconTextButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnterOTP = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[4rem] space-y-[2rem]">
      <IconTextButton
        icon={<MoveLeft size={30} />}
        cta="Go back"
        onClick={() => navigate(-1)}
      />

      <h3 className="text-[2.4rem] text-primary font-bold leading-[2.4rem]">
        Create an account
      </h3>

      <div className="w-[70%] space-y-4 my-[4rem]  text-center mx-auto text-[1.5rem]">
        <h6 >
          We have sent an OTP code to <b>user@email.com</b>
        </h6>
        <p >Please enter the OTP to continue </p>
      </div>

      <form className="space-y-[4rem] my-[2rem]">
        <div>
          <label
            htmlFor="otp"
            className="font-semibold text-[1.5rem] text-primary"
          >
            Enter OPT sent to your mail
          </label>
          <Input name="otp" className="tracking-[5rem] text-[4rem]" placeholder="****" type="text" />
        </div>

        <p className="text-[1.4rem] w-[70%] mx-auto text-center ">
          I did not receive it. <button className="text-primary">Please send a new one</button>
        </p>

        <Button className="w-full">Continue</Button>
      </form>
    </div>
  );
};

export default EnterOTP;
