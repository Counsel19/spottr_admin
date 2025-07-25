import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { AdminUserTable } from "@/components/userManagement/AdminUserTable";
import type { RootState } from "@/lib/redux/store";

import { useState } from "react";
import { useSelector } from "react-redux";

// const tabsList = [
//   {
//     name: "Admins",
//     path: "/dashboard/users/admins?tabs=admin",
//   },
//   {
//     name: "Roles and Permission",
//     path: "/dashboard/users/admins?tabs=roles-and-permission",
//   },
// ];

const AdminManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="User Management"
        subTitle="Manage your super admins, corporate, users etc."
        addButtonText="+ Create New Admin"
        removeButtonText="- Delete Admin"
      />

      <PageHeader tabList={selectedSubLinks} />

      <AdminUserTable
        searchTerm={searchTerm}
        setSelectedRole={setSelectedRole}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
      />
    </div>
  );
};

export default AdminManagement;
