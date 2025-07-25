import { FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Searchbar from "./molecules/Searchbar";
import { Button } from "../ui/button";
import { ProfilePopOver } from "./molecules/ProfilePopover";

const DashbaordHeader = () => {
  return (
    <div className=" mb-4 ">
      <div className="flex rounded-[1rem] justify-between items-center bg-[#F5F5F5] py-2 px-4 border-[#E8E8E8] ">
        <Searchbar styleClasses="bg-white" />

        <div className="flex items-center gap-[4rem]">
          <div className="flex items-center gap-[1rem]">
            <Button variant={"ghost"} className="rounded-full bg-white">
              <IoMail className="size-10 text-primary" />
            </Button>
            <Button variant={"ghost"} className="rounded-full bg-white">
              <FaBell className="size-10 text-primary" />
            </Button>
          </div>

          <ProfilePopOver />
        </div>
      </div>
    </div>
  );
};

export default DashbaordHeader;
