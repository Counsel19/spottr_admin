import PageHeader from "@/components/shared/PageHeader";
import { AdminUserTable } from "@/components/userManagement/AdminUserTable";

import { useState } from "react";

const tabsList = [
  {
    name: "Admins",
    path: "/dashboard/users/admins?tabs=admin",
  },
  {
    name: "Roles and Permission",
    path: "/dashboard/users/admins?tabs=roles-and-permission",
  },
];

const AdminManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <PageHeader
        pageTitle="Manage Admin"
        tabList={tabsList}
        createText="Create Admin"
        deleteText={`Delete Admin >`}
      />

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
