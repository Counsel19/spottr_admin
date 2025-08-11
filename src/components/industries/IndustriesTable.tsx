import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useGetIndustries } from "@/lib/api/industries";
import { useState } from "react";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { FaIndustry } from "react-icons/fa";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import { toast } from "sonner";
import IndustryRecord from "./IndustryRecord";

interface IndustriesTableProps {
  searchTerm: string;
}

const IndustriesTable = ({ searchTerm }: IndustriesTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const { data, isLoading, error, isError } = useGetIndustries({
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
            <FaIndustry className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No Industry found</h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable columns={IndustryRecord} data={data?.data as IIndustry[]} />
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

export default IndustriesTable;
