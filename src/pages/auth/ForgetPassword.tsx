import IconTextButton from "@/components/shared/molecules/IconTextButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[4rem] space-y-[2rem]">
      <IconTextButton
        icon={<MoveLeft size={30} />}
        cta="Go back"
        onClick={() => navigate(-1)}
      />

      <h3 className="text-[2.4rem] text-primary font-bold leading-[2.4rem]">
        Enter your email
      </h3>

      <form className="space-y-[2rem] my-[2rem]">
        <Input placeholder="name@email.com" type="email" />

        <Button className="w-full">Continue</Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
