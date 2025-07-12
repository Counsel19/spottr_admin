import { Outlet } from "react-router-dom";
import DashbaordHeader from "../shared/DashbaordHeader";
import DashbaordSidebar from "../shared/DashbaordSidebar";

const DashbaordLayout = () => {
  return (
    <div>
      <div className="grid gap-[1rem] grid-cols-[8.5rem_1fr] bg-[#e7eef8]">
        {/* Sidebar */}
        <DashbaordSidebar />
        <div className="p-[1.5rem] my-[1rem] mr-[1rem] bg-[#fbfcfe] rounded-lg ">
          {/* Header */}
          <DashbaordHeader />
          {/* Main Content */}
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbaordLayout;
