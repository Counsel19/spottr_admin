import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useState } from "react";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import { toast } from "sonner";
import { useDeleteProduct, useGetAllProducts } from "@/lib/api/products";
import { PackageSearch } from "lucide-react";
import ProductRecord from "./ProductRecord";
import ConfirmationModal from "../shared/ConfirmationModal";
import { useQueryClient } from "@tanstack/react-query";

interface ProductTableProps {
  searchTerm: string;
}

const perPage = Number(import.meta.env.VITE_DATA_PER_PAGE);

const ProductTable = ({ searchTerm }: ProductTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductDetails, setSelectedProductDetails] = useState<{
    id: string;
    isAvailable: boolean;
    name: string;
  } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const debouncedSearchValue = useDebounce(searchTerm, 2000);

  const getAllProductQuery = useGetAllProducts({
    per_page: perPage,
    search: debouncedSearchValue,
  });

  const deleteProductMutate = useDeleteProduct();
  const queryClient = useQueryClient();

  const { itemsPerPage, totalItems, totalPages } = usePaginationMeta(
    setCurrentPage,
    getAllProductQuery.data?.pagination
  );

  const onPageChange = () => setCurrentPage((cur) => cur + 1);

  return (
    <div className="bg-white">
      <DataLoader
        isLoading={getAllProductQuery.isLoading || !getAllProductQuery.data?.data}
        isEmpty={getAllProductQuery.data?.data?.length === 0}
        skeleton={
          <TableSkeleton rows={3} columns={6} showCheckbox={false} showAvatar={false} showActions={true} />
        }
        emptyState={
          <div className="text-center py-10 space-y-6">
            <PackageSearch className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No Product found</h3>
            <p className="text-[1.4rem] text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        }
      >
        <AppTable
          columns={ProductRecord({ setSelectedProductDetails, setShowModal })}
          data={getAllProductQuery.data?.data as IProductDetails[]}
        />
      </DataLoader>

      {getAllProductQuery.data?.pagination && (
        <div className="mt-[4rem]">
          <AppPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
            showInfo
          />
        </div>
      )}

      {getAllProductQuery.isError && getAllProductQuery.error && toast.error(getAllProductQuery.error?.message)}

      {showModal && selectedProductDetails && (
        <ConfirmationModal
          type="danger"
          title="Are you sure you want to proceed?"
          isLoading={deleteProductMutate.isPending}
          proceedFunc={async () => {
            await deleteProductMutate.mutateAsync(selectedProductDetails.id);
            setShowModal(false);
            queryClient.invalidateQueries({ queryKey: ["products", perPage, debouncedSearchValue] });
          }}
          description={`Are you sure you want to delete this Product - (${selectedProductDetails.name})?`}
          cancelFunc={() => {
            setShowModal(false);
            setSelectedProductDetails(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductTable;
