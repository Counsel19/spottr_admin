import { NotebookPen } from "lucide-react";
import { AppPagination } from "../shared/molecules/AppPagination";
import { useState } from "react";
import { AppTable } from "../shared/AppTable";
import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { toast } from "sonner";
import { useGetAllSubscriptionPlan } from "@/lib/api/subscription";
import SubscriptionPlanRecord from "./SubscriptionPlanRecord";

interface UserTableProps {
  searchTerm: string;
}

const SubscriptionPlanTable = ({ searchTerm }: UserTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const deboucedSearchValue = useDebounce(searchTerm, 2000);

  const { data, isLoading, error, isError } = useGetAllSubscriptionPlan({
    per_page: "20",
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
            <NotebookPen className="size-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[1.8rem] font-semibold">No Plans found</h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable
          columns={SubscriptionPlanRecord}
          data={data?.data as ISubscribersPlan[]}
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
    </div>
  );
};

export default SubscriptionPlanTable;
