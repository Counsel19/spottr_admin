import { Users } from "lucide-react";
import AdminUserRecord from "./AdminUserRecord";
import { useState } from "react";
import { AppPagination } from "../shared/molecules/AppPagination";
import { AppTable } from "../shared/AppTable";

const users: IAdminUser[] = [
  {
    id: "1",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Administrator",
    permission: "Administrator",
    lastLogin: "Jan 4, 8:35PM",
    status: "active",
    phoneNumber: "0810004646734",
    username: "waleinfo",
    avatar: "/images/avatar.png",
  },
  {
    id: "2",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Auditor",
    permission: "Auditor",
    lastLogin: "Jan 4, 8:35PM",
    phoneNumber: "0810004646734",
    username: "waleinfo",
    status: "inactive",
    avatar: "/images/avatar.png",
  },
  {
    id: "3",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Marketplace Manager",
    phoneNumber: "0810004646734",
    username: "waleinfo",
    permission: "Marketplace mgr",
    lastLogin: "Jan 4, 8:35PM",
    status: "inactive",
    avatar: "/images/avatar.png",
  },
  {
    id: "4",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Content Manager",
    permission: "Content mgr",
    phoneNumber: "0810004646734",
    username: "waleinfo",
    lastLogin: "Jan 4, 8:35PM",
    status: "inactive",
    avatar: "/images/avatar.png",
  },
  {
    id: "5",
    name: "Adewale Adedamola",
    phoneNumber: "0810004646734",
    username: "waleinfo",
    email: "Adewale67@spottr.com",
    role: "Admin",
    permission: "Admin",
    lastLogin: "Jan 4, 8:35PM",
    status: "inactive",
    avatar: "/images/avatar.png",
  },
];

interface UserTableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
}

export const AdminUserTable = ({
  searchTerm,
  selectedRole,
}: UserTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;
  const totalItems = 20;
  const itemsPerPage = 5;
  const onPageChange = () => {
    setCurrentPage((cur) => cur + 1);
  };
  const showInfo = true;

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === "all" ||
      user.role.toLowerCase().includes(selectedRole.toLowerCase());
    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-white">
      <AppTable
        columns={AdminUserRecord}
        data={filteredUsers}
        emptyState={{
          icon: <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />,
          title: "No users found",
          message: "Try adjusting your search or filter criteria.",
        }}
      />

      <div className="mt-[4rem]">
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
          showInfo={showInfo}
        />
      </div>
    </div>
  );
};
