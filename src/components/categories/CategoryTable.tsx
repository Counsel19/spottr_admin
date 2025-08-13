import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useState } from "react";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import { toast } from "sonner";
import CategoryItem from "./CategoryItem";
import { BiCategory } from "react-icons/bi";
import { useDeleteCategory, useGetCategories } from "@/lib/api/categories";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmationModal from "../shared/ConfirmationModal";

interface CategoryTableProps {
  searchTerm: string;
}

const CategoryTable = ({ searchTerm }: CategoryTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryDetails, setSelectedCategoryDetails] = useState<{
    id: string,
    name: string,
  } | null>(null)
  const [showModal, setShowModal] = useState(false)

  const deletCategoryMutate = useDeleteCategory()
  const queryClient = useQueryClient();



  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const { data, isLoading, error, isError } = useGetCategories({
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
            <BiCategory className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No Category found</h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable columns={CategoryItem({
          setSelectedCategoryDetails, setShowModal
        })} data={data?.data as ICategory[]} />
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

      {showModal && selectedCategoryDetails && <ConfirmationModal type={"danger"} title="Are you sure you want to proceed?" isLoading={deletCategoryMutate.isPending}
        proceedFunc={async () => {
          await deletCategoryMutate.mutateAsync(selectedCategoryDetails.id)
          setShowModal(false)

          queryClient.invalidateQueries({
            queryKey: ["category", deboucedSearchValue,],
          });
        }} description={`Are you sure you wan to delete this Category - (${selectedCategoryDetails.name})?`} cancelFunc={() => {
          setShowModal(false)
          setSelectedCategoryDetails(null)
        }} />}
    </div>
  );
};

export default CategoryTable;
