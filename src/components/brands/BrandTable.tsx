import { toast } from "sonner";
import { AppPagination } from "../shared/molecules/AppPagination";
import { BiCategory } from "react-icons/bi";
import { TableSkeleton } from "../ui/table-skeleton";
import DataLoader from "../shared/DataLoader";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";
import { AppTable } from "../shared/AppTable";
import BrandItem from "./BrandItem";
import { useDeleteBrand, useGetBrands } from "@/lib/api/brand";
import ConfirmationModal from "../shared/ConfirmationModal";
import { useQueryClient } from "@tanstack/react-query";

interface BrandTableProps {
  searchTerm: string;
}

const BrandTable = ({ searchTerm }: BrandTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrandDetails, setSelectedBrandDetails] = useState<{
    id: string,
    name: string,
  } | null>(null)
  const [showModal, setShowModal] = useState(false)
  
  const queryClient = useQueryClient();

  const deboucedSearchValue = useDebounce(searchTerm, 2000);
  const { data, isLoading, error, isError } = useGetBrands({
    search: deboucedSearchValue,
  });

  const deleteBrandMutate = useDeleteBrand()

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
            <BiCategory className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No Category found</h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable columns={BrandItem({
          setSelectedBrandDetails, setShowModal
        })} data={data?.data as IBrand[]} />
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

      {showModal && selectedBrandDetails && <ConfirmationModal type={"danger"} title="Are you sure you want to proceed?" isLoading={deleteBrandMutate.isPending}
        proceedFunc={async () => {
          await deleteBrandMutate.mutateAsync(selectedBrandDetails.id)
          setShowModal(false)

          queryClient.invalidateQueries({
            queryKey: ["brands", deboucedSearchValue,],
          });
        }} description={`Are you sure you wan to delete this Brand - (${selectedBrandDetails.name})?`} cancelFunc={() => {
          setShowModal(false)
          setSelectedBrandDetails(null)
        }} />}
    </div>
  );
};

export default BrandTable;
