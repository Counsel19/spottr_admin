import { FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Searchbar from "./molecules/Searchbar";
import { Button } from "../ui/button";
import { ProfilePopOver } from "./molecules/ProfilePopover";
import TabsBox from "./molecules/TabsBox";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store";

const DashbaordHeader = () => {
  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);
  return (
    <div className="border-b border-sky-blue">
      <div className="flex justify-between items-center bg-white">
        <div className="flex items-center gap-[2rem]">
          <div className="space-y-2">
            <h3 className="text-[2.4rem] text-primary font-bold leading-[2.4rem]">
              Dashboard Overview
            </h3>
            <p className="font-semibold text-[1.4rem] text-muted">
              Welcome Admin
            </p>
          </div>
          <Searchbar />
        </div>

        <div className="flex items-center gap-[4rem]">
          <div className="flex items-center gap-[1rem]">
            <Button variant={"ghost"} className="">
              <FaBell className="size-10 text-primary" />
            </Button>

            <Button variant={"ghost"} className="">
              <IoMail className="size-10 text-primary" />
            </Button>
          </div>

          <ProfilePopOver />
        </div>
      </div>

      <div className="flex justify-between items-center bg-white pt-4">
        <div className="flex gap-4">
          <img src="/images/logo.svg" alt="logo" />

          {selectedSubLinks ? <TabsBox tabs={selectedSubLinks} /> : null}
        </div>

        <div className="flex gap-[2rem] items-center">
          <Button variant={"ghost"} className="text-primary font-semibold">
            + Create task
          </Button>
          <Button variant={"ghost"} className="text-primary font-semibold">
            + add new categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashbaordHeader;
