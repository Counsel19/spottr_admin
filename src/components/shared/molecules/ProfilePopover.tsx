import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import { cn } from "@/lib/utils";
import { FaCircleUser } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import { useLogout } from "@/hooks/useLogout";

export const ProfilePopOver = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const logout = useLogout();

  const handleLogout = async () => {
    try {
      logout()
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        asChild
        className={cn(
          buttonVariants({
            variant: "ghost",
            className: "w-fit p-2  h-fit hover:text-primary cursor-pointer ",
          })
        )}
      >
        <div className="flex items-center gap-4">
          <UserAvatar showStatus imgUrl="/images/avatar.png" name={"Admin"} />
          <div>
            <h6 className="text-[1.2rem] font-semibold text-[#4D5464]">
              Okpabi Counsel
            </h6>
            <span className="text-[#667085] text-[1.2rem]">Admin</span>
          </div>
          <ChevronDown className="size-8 text-[#667085]" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        avoidCollisions
        side="bottom"
        className="w-[24rem] p-8 bg-white text-[1.4rem] rounded-2xl shadow-lg"
      >
        <div className="flex flex-col space-y-3 ">
          <Link
            onClick={() => setOpen(false)}
            to="/account"
            className="flex flex-col gap-3 hover:text-primary  py-2 border-b border-muted "
          >
            <FaCircleUser size={26} />
            <span>Adewale Adedamola</span>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/account/orders"
            className="flex hover:text-primary  py-2 gap-3 items-center border-b border-muted "
          >
            Create a new admin account
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/account/orders"
            className="flex hover:text-primary  py-2 gap-3 items-center border-b border-muted "
          >
            Settings
          </Link>

          <Button
            isLoading={isLoading}
            variant={"ghost"}
            onClick={handleLogout}
            className=" text-destructive h-10 hover:bg-transparent hover:text-rose-800 font-bold p-0 justify-start"
          >
            <span>Logout</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
