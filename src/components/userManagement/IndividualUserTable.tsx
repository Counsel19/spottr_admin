import { Users } from "lucide-react";
import IndividualUserRecord from "./IndividualUserRecord";
import { AppPagination } from "../shared/molecules/AppPagination";
import { useState } from "react";
import { AppTable } from "../shared/AppTable";

const users: IIndividualUser[] = [
  {
    id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
    role: "individual",
    user_name: "nwanoziep",
    phone: "08085712067",
    pic: "/images/avatar.png",
    email: "noziep@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T10:55:36.000000Z",
    updated_at: "2025-06-21T10:55:36.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "a380b071-a3cd-482f-9e5d-77130fbd0c35",
      user_id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
      first_name: "John",
      last_name: "Doe",
      address: null,
      bio: null,
      type: "buyer",
      verification_level: "0",
      created_at: "2025-06-21T10:55:36.000000Z",
      updated_at: "2025-06-21T10:55:36.000000Z",
    },
  },

  {
    id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
    role: "individual",
    user_name: "nwanoziep",
    phone: "08085712067",
    pic: "/images/avatar.png",
    email: "noziep@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T10:55:36.000000Z",
    updated_at: "2025-06-21T10:55:36.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "a380b071-a3cd-482f-9e5d-77130fbd0c35",
      user_id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
      first_name: "John",
      last_name: "Doe",
      address: null,
      bio: null,
      type: "buyer",
      verification_level: "0",
      created_at: "2025-06-21T10:55:36.000000Z",
      updated_at: "2025-06-21T10:55:36.000000Z",
    },
  },

  {
    id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
    role: "individual",
    user_name: "nwanoziep",
    phone: "08085712067",
    pic: "/images/avatar.png",
    email: "noziep@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T10:55:36.000000Z",
    updated_at: "2025-06-21T10:55:36.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "a380b071-a3cd-482f-9e5d-77130fbd0c35",
      user_id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
      first_name: "John",
      last_name: "Doe",
      address: null,
      bio: null,
      type: "buyer",
      verification_level: "0",
      created_at: "2025-06-21T10:55:36.000000Z",
      updated_at: "2025-06-21T10:55:36.000000Z",
    },
  },

  {
    id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
    role: "individual",
    user_name: "nwanoziep",
    phone: "08085712067",
    pic: "/images/avatar.png",
    email: "noziep@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T10:55:36.000000Z",
    updated_at: "2025-06-21T10:55:36.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "a380b071-a3cd-482f-9e5d-77130fbd0c35",
      user_id: "c27500b0-a95f-4a37-a15d-99607fb2e87a",
      first_name: "John",
      last_name: "Doe",
      address: null,
      bio: null,
      type: "buyer",
      verification_level: "0",
      created_at: "2025-06-21T10:55:36.000000Z",
      updated_at: "2025-06-21T10:55:36.000000Z",
    },
  },
];

interface UserTableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
}

export const IndividualUserTable = ({
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
      user.profile.first_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.profile.last_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === "all" ||
      user.role.toLowerCase().includes(selectedRole.toLowerCase());
    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-white">
      <AppTable
        columns={IndividualUserRecord}
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
