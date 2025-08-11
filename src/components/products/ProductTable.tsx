import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useState } from "react";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import { toast } from "sonner";
import {
  useGetAllProducts,
  useGetAllProductsRequest,
} from "@/lib/api/products";
import { PackageSearch } from "lucide-react";
import ProductRecord from "./ProductRecord";

interface ProductTableProps {
  searchTerm: string;
  isProductRequest?: boolean;
}

const ProductTable = ({ searchTerm, isProductRequest }: ProductTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const getAllProductQuery = useGetAllProducts({
    per_page: 20,
    search: deboucedSearchValue,
  });
  const getAllProductRequestQuery = useGetAllProductsRequest({
    per_page: 20,
    search: deboucedSearchValue,
  });

  const returnActiveQuery = () =>
    isProductRequest ? getAllProductRequestQuery : getAllProductQuery;

  const { itemsPerPage, totalItems, totalPages } = usePaginationMeta(
    setCurrentPage,
    returnActiveQuery().data?.pagination
  );

  const onPageChange = () => {
    setCurrentPage((cur) => cur + 1);
  };
  const showInfo = true;

  return (
    <div className="bg-white">
      <DataLoader
        isLoading={
          returnActiveQuery().isLoading || !returnActiveQuery().data?.data
        }
        isEmpty={
          returnActiveQuery().data?.data &&
          returnActiveQuery().data?.data.length == 0
        }
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
            <PackageSearch className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">
              No Product {isProductRequest ? "Request" : ""} found
            </h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable
          columns={ProductRecord}
          data={returnActiveQuery().data?.data as IProductDetails[]}
        />
      </DataLoader>

      {returnActiveQuery().data?.pagination && (
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

      {returnActiveQuery().isError &&
        returnActiveQuery().error &&
        toast.error(returnActiveQuery().error?.message)}
    </div>
  );
};

export default ProductTable;
