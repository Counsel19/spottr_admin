import { Users } from "lucide-react";
import AdminUserRecord from "./AdminUserRecord";
import { useState } from "react";
import { AppPagination } from "../shared/molecules/AppPagination";
import { AppTable } from "../shared/AppTable";
import { useGetAllUsers } from "@/lib/api/userManagement";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { toast } from "sonner";

interface UserTableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
}

export const AdminUserTable = ({ searchTerm }: UserTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const { data, isLoading, error, isError } = useGetAllUsers({
    role: "admin",
    per_page: 20,
    search: deboucedSearchValue,
  });

  const { itemsPerPage, totalItems, totalPages } = usePaginationMeta(
    setCurrentPage,
    data?.pagination
  );

  const onPageChange = () => {
    setCurrentPage((cur) => cur + 1);
  };
  const showInfo = true;

  return (
    <div className="bg-white">
      <DataLoader
        isLoading={isLoading || !data?.data}
        isEmpty={data?.data && data?.data?.length === 0}
        skeleton={
          <TableSkeleton
            rows={3}
            columns={6}
            showCheckbox={false}
            showAvatar={false}
            showActions={true}
          />
        }
        emptyState={
          <div className="text-center py-10 space-y-6">
            <Users className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No users found</h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable columns={AdminUserRecord} data={data?.data as IAdminUser[]} />
      </DataLoader>

      {data?.pagination && (
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
      )}

      {isError && error.message && toast.error(error.message)}
    </div>
  );
};
