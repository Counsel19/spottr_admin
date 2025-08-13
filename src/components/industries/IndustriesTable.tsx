import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useDeleteIndustry, useGetIndustries } from "@/lib/api/industries";
import { useState } from "react";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { FaIndustry } from "react-icons/fa";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import { toast } from "sonner";
import IndustryRecord from "./IndustryRecord";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmationModal from "../shared/ConfirmationModal";

interface IndustriesTableProps {
  searchTerm: string;
}

const IndustriesTable = ({ searchTerm }: IndustriesTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false)
  const [selectedIndustryDetails, setSelectedIndustryDetails] = useState<{
    id: string,
    name: string,
  } | null>(null)

  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const { data, isLoading, error, isError } = useGetIndustries({
    search: deboucedSearchValue,
  });

  console.log(data, "data")
  console.log(data?.pagination, "data?pagination")

  const deleteIndustryMutate = useDeleteIndustry()

  const { itemsPerPage, totalItems, totalPages } = usePaginationMeta(
    setCurrentPage,
    data?.pagination
  );

  console.log(itemsPerPage, totalItems, totalPages)

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
            <FaIndustry className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No Industry found</h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable columns={IndustryRecord({
          setSelectedIndustryDetails, setShowModal
        })} data={data?.data as IIndustry[]} />
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

      {showModal && selectedIndustryDetails && <ConfirmationModal type={"danger"} title="Are you sure you want to proceed?" isLoading={deleteIndustryMutate.isPending}
        proceedFunc={async () => {
          await deleteIndustryMutate.mutateAsync(selectedIndustryDetails.id)
          setShowModal(false)

          queryClient.invalidateQueries({
            queryKey: ["industries", deboucedSearchValue, ],
          });
        }} description={`Are you sure you wan to delete this industry - (${selectedIndustryDetails.name})?`} cancelFunc={() => {
          setShowModal(false)
          setSelectedIndustryDetails(null)
        }} />}
    </div>
  );
};

export default IndustriesTable;
