import { Users } from "lucide-react";
import CorporateUserRecord from "./CorporateUserRecord";
import { AppPagination } from "../shared/molecules/AppPagination";
import { useState } from "react";
import { AppTable } from "../shared/AppTable";
import { useDebounce } from "@/hooks/useDebounce";
import { useBlockUnblockUser, useGetAllUsers } from "@/lib/api/userManagement";
import { UserRoles } from "@/constants/enums";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { toast } from "sonner";
import ConfirmationModal from "../shared/ConfirmationModal";
import { useQueryClient } from "@tanstack/react-query";

interface UserTableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  isActive: boolean | null;
}

export const CorporateUserTable = ({
  searchTerm,
  isActive,
}: UserTableProps) => {

  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false)
  const [selectedProfileDetails, setSelectedProfileDetails] = useState<{
    id: string,
    isActive: boolean
  } | null>(null)
  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const returnQuery = () => {
    const query: IGetUserQueryParams = {
      role: UserRoles.corporate,
      search: deboucedSearchValue,
    };
    if (isActive !== null) {
      query.is_active = isActive;
    }

    return query;
  };

  const { data, isLoading, error, isError, } = useGetAllUsers(returnQuery());

  const { itemsPerPage, totalItems, totalPages } = usePaginationMeta(
    setCurrentPage,
    data?.pagination
  );

  const blockUnblockUserMutate = useBlockUnblockUser();


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
        <AppTable
          columns={CorporateUserRecord({
            setSelectedProfileDetails, setShowModal
          })}
          data={data?.data as ICorporateUser[]}
        />
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
      {showModal && selectedProfileDetails && <ConfirmationModal type={selectedProfileDetails?.isActive ? "danger" : "success"} title="Are you sure you want to proceed?" isLoading={blockUnblockUserMutate.isPending}
        proceedFunc={async () => {
          await blockUnblockUserMutate.mutateAsync({
            is_active: !selectedProfileDetails.isActive,
            id: selectedProfileDetails.id
          })
          setShowModal(false)
          const { per_page, is_active, role, type } = returnQuery()

          queryClient.invalidateQueries({
            queryKey: ["users", is_active, per_page, role, deboucedSearchValue, type,],
          });
        }} description="Please confirm your action." cancelFunc={() => {
          setShowModal(false)
          setSelectedProfileDetails(null)
        }} />}
    </div>
  );
};
