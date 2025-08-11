import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { AdminUserTable } from "@/components/userManagement/AdminUserTable";
import type { RootState } from "@/lib/redux/store";

import { useState } from "react";
import { useSelector } from "react-redux";

const AdminManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  const handleFilterChange = () => {};

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="User Management"
        subTitle="Manage your super admins, corporate, users etc."
        addButtonText="Create New Admin"
      />

      <PageHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        tabList={selectedSubLinks}
        filters={userFilterFields}
        handleFilterChange={handleFilterChange}
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

const userFilterFields: FilterField[] = [
  {
    key: "role",
    label: "Role",
    options: [
      { label: "Super Admin", value: "super_admin" },
      { label: "Admin", value: "admin" },
      { label: "Individual", value: "individual" },
      { label: "Corporate", value: "corporate" },
    ],
  },
  {
    key: "type",
    label: "User Type",
    options: [
      { label: "Individual Seller", value: "individual_seller" },
      { label: "Individual Buyer", value: "individual_buyer" },
    ],
  },
  {
    key: "is_active",
    label: "Active Status",
    options: [
      { label: "Active", value: "true" },
      { label: "Inactive", value: "false" },
    ],
  },
];
