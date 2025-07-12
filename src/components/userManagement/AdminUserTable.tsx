import { Users } from "lucide-react";
import AdminUserRecord from "./AdminUserRecord";

const users: IAdminUser[] = [
  {
    id: "1",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Administrator",
    permission: "Administrator",
    lastLogin: "Jan 4, 8:35PM",
    status: "online",
    avatar: "/images/avatar.png",
  },
  {
    id: "2",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Auditor",
    permission: "Auditor",
    lastLogin: "Jan 4, 8:35PM",
    status: "offline",
       avatar: "/images/avatar.png",
  },
  {
    id: "3",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Marketplace Manager",
    permission: "Marketplace mgr",
    lastLogin: "Jan 4, 8:35PM",
    status: "offline",
       avatar: "/images/avatar.png",
  },
  {
    id: "4",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Content Manager",
    permission: "Content mgr",
    lastLogin: "Jan 4, 8:35PM",
    status: "offline",
        avatar: "/images/avatar.png",
  },
  {
    id: "5",
    name: "Adewale Adedamola",
    email: "Adewale67@spottr.com",
    role: "Admin",
    permission: "Admin",
    lastLogin: "Jan 4, 8:35PM",
    status: "offline",
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Status
              </th>
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Photo
              </th>
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Full Name
              </th>
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Email Address
              </th>
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Permission
              </th>
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Last login
              </th>
              <th className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredUsers.map((user) => (
              <AdminUserRecord key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No users found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};
