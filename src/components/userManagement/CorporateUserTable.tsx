import { Users } from "lucide-react";
import CorporateUserRecord from "./CorporateUserRecord";
import { AppPagination } from "../shared/molecules/AppPagination";
import { useState } from "react";
import { AppTable } from "../shared/AppTable";

const users: ICorporateUser[] = [
  {
    id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
    role: "corporate",
    user_name: "bernard-1",
    phone: "08085712095",
    pic: "/images/avatar.png",
    email: "cerebrohive@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T11:53:51.000000Z",
    updated_at: "2025-07-08T20:30:51.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "216aaa02-ed55-45cb-995d-22c0f2a3b5bc",
      user_id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
      industry_id: "7f578317-b6eb-4edc-a217-d3b376990a03",
      kyc_doc:
        "http://127.0.0.1:8000/storage/kyc_documents/7ISxd7Vc0Hjzv1fh3eCjCLGv5Lwr6IUQiiOcSc0S.pdf",
      company_name: "Bernard",
      company_size: null,
      company_address: "17 ayobo  lagos",
      company_description: "A test dcji ovsdovni idsdionsdn ndvson",
      tags: null,
      website_url: null,
      created_at: "2025-06-21T11:53:51.000000Z",
      updated_at: "2025-06-21T11:53:51.000000Z",
    },
  },

  {
    id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
    role: "corporate",
    user_name: "bernard-1",
    phone: "08085712095",
    pic: "/images/avatar.png",
    email: "cerebrohive@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T11:53:51.000000Z",
    updated_at: "2025-07-08T20:30:51.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "216aaa02-ed55-45cb-995d-22c0f2a3b5bc",
      user_id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
      industry_id: "7f578317-b6eb-4edc-a217-d3b376990a03",
      kyc_doc:
        "http://127.0.0.1:8000/storage/kyc_documents/7ISxd7Vc0Hjzv1fh3eCjCLGv5Lwr6IUQiiOcSc0S.pdf",
      company_name: "Bernard",
      company_size: null,
      company_address: "17 ayobo  lagos",
      company_description: "A test dcji ovsdovni idsdionsdn ndvson",
      tags: null,
      website_url: null,
      created_at: "2025-06-21T11:53:51.000000Z",
      updated_at: "2025-06-21T11:53:51.000000Z",
    },
  },

  {
    id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
    role: "corporate",
    user_name: "bernard-1",
    phone: "08085712095",
    pic: "/images/avatar.png",
    email: "cerebrohive@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T11:53:51.000000Z",
    updated_at: "2025-07-08T20:30:51.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "216aaa02-ed55-45cb-995d-22c0f2a3b5bc",
      user_id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
      industry_id: "7f578317-b6eb-4edc-a217-d3b376990a03",
      kyc_doc:
        "http://127.0.0.1:8000/storage/kyc_documents/7ISxd7Vc0Hjzv1fh3eCjCLGv5Lwr6IUQiiOcSc0S.pdf",
      company_name: "Bernard",
      company_size: null,
      company_address: "17 ayobo  lagos",
      company_description: "A test dcji ovsdovni idsdionsdn ndvson",
      tags: null,
      website_url: null,
      created_at: "2025-06-21T11:53:51.000000Z",
      updated_at: "2025-06-21T11:53:51.000000Z",
    },
  },

  {
    id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
    role: "corporate",
    user_name: "bernard-1",
    phone: "08085712095",
    pic: "/images/avatar.png",
    email: "cerebrohive@gmail.com",
    email_verified_at: null,
    is_active: true,
    fiat_wallet: "0.00",
    crypto_wallet: "0.00000000",
    created_at: "2025-06-21T11:53:51.000000Z",
    updated_at: "2025-07-08T20:30:51.000000Z",
    deleted_at: null,
    deletion_scheduled_at: null,
    profile: {
      id: "216aaa02-ed55-45cb-995d-22c0f2a3b5bc",
      user_id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
      industry_id: "7f578317-b6eb-4edc-a217-d3b376990a03",
      kyc_doc:
        "http://127.0.0.1:8000/storage/kyc_documents/7ISxd7Vc0Hjzv1fh3eCjCLGv5Lwr6IUQiiOcSc0S.pdf",
      company_name: "Bernard",
      company_size: null,
      company_address: "17 ayobo  lagos",
      company_description: "A test dcji ovsdovni idsdionsdn ndvson",
      tags: null,
      website_url: null,
      created_at: "2025-06-21T11:53:51.000000Z",
      updated_at: "2025-06-21T11:53:51.000000Z",
    },
  },
];

interface UserTableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
}

export const CorporateUserTable = ({
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
      user.profile?.company_name
        .toLowerCase()
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
        columns={CorporateUserRecord}
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
