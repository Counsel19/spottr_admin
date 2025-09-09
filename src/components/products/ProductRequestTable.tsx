import { useDebounce } from "@/hooks/useDebounce";
import { usePaginationMeta } from "@/hooks/usePaginatedMeta";
import { useState } from "react";
import DataLoader from "../shared/DataLoader";
import { TableSkeleton } from "../ui/table-skeleton";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import { toast } from "sonner";
import {
  useApproveProductRequest,
  useGetAllProductsRequest,
  useRejectProductRequest,
} from "@/lib/api/products";
import { PackageSearch } from "lucide-react";
import ConfirmationModal from "../shared/ConfirmationModal";
import { useQueryClient } from "@tanstack/react-query";
import ProductRequestRecord from "./ProductRequestRecord";

interface ProductRequestTableProps {
  searchTerm: string;
}

const perPage = Number(import.meta.env.VITE_DATA_PER_PAGE);

const ProductRequestTable = ({ searchTerm }: ProductRequestTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [selectedProductRequestDetails, setSelectedProductRequestDetails] =
    useState<{
      id: string;
      isApprove: boolean;
      brandId?: string;
      corporateProfileId?: string;
      name: string;
    } | null>(null);

  const debouncedSearchValue = useDebounce(searchTerm, 2000);
  const queryClient = useQueryClient();

  const getAllProductRequestQuery = useGetAllProductsRequest({
    per_page: perPage,
    search: debouncedSearchValue,
  });

  const approveProductRequestMutate = useApproveProductRequest();
  const rejectProductRequestMutate = useRejectProductRequest();

  const { itemsPerPage, totalItems, totalPages } = usePaginationMeta(
    setCurrentPage,
    getAllProductRequestQuery.data?.pagination
  );

  const onPageChange = () => setCurrentPage((cur) => cur + 1);
  const [reason, setReason] = useState("");

  return (
    <div className="bg-white">
      <DataLoader
        isLoading={
          getAllProductRequestQuery.isLoading ||
          !getAllProductRequestQuery.data?.data
        }
        isEmpty={getAllProductRequestQuery.data?.data?.length === 0}
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
              No Product Request found
            </h3>
            <p className="text-[1.4rem] text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        }
      >
        <AppTable
          columns={ProductRequestRecord({
            setSelectedProductDetails: setSelectedProductRequestDetails,
            setShowApprovalModal,
            setShowRejectionModal,
          })}
          data={getAllProductRequestQuery.data?.data as IProductRequest[]}
        />
      </DataLoader>

      {getAllProductRequestQuery.data?.pagination && (
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

      {getAllProductRequestQuery.isError &&
        getAllProductRequestQuery.error &&
        toast.error(getAllProductRequestQuery.error?.message)}

      {showApprovalModal &&
        selectedProductRequestDetails &&
        selectedProductRequestDetails.isApprove && (
          <ConfirmationModal
            type="success"
            title="Select and Confirm to Proceed!"
            isLoading={approveProductRequestMutate.isPending}
            setSelectedProductRequestDetails={setSelectedProductRequestDetails}
            proceedFunc={async () => {
              if (
                !selectedProductRequestDetails.brandId ||
                !selectedProductRequestDetails.corporateProfileId
              )
                return toast.error(
                  "Either No Brand Id or no Coporate Profile Id "
                );
              await approveProductRequestMutate.mutateAsync({
                productRequestId: selectedProductRequestDetails.id,
                data: {
                  brand_id: selectedProductRequestDetails.brandId,
                  corporate_profile_id:
                    selectedProductRequestDetails.corporateProfileId,
                },
              });
              setShowApprovalModal(false);
              queryClient.invalidateQueries({
                queryKey: [
                  "products-request",
                  undefined,
                  perPage,
                  undefined,
                  debouncedSearchValue,
                  undefined,
                ],
              });
            }}
            description={`Are you sure you want to Approve this Product Request - (${selectedProductRequestDetails.name})?`}
            cancelFunc={() => {
              setShowApprovalModal(false);
              setSelectedProductRequestDetails(null);
            }}
          />
        )}

      {showRejectionModal &&
        selectedProductRequestDetails &&
        !selectedProductRequestDetails.isApprove && (
          <ConfirmationModal
            type="danger"
            reason={reason}
            setReason={setReason}
            title="Confirm Action to Proceed!"
            isLoading={rejectProductRequestMutate.isPending}
            proceedFunc={async () => {
              await rejectProductRequestMutate.mutateAsync({
                productRequestId: selectedProductRequestDetails.id,
                data: {
                  admin_comment: reason,
                },
              });
              setShowRejectionModal(false);
              queryClient.invalidateQueries({
                queryKey: [
                  "products-request",
                  undefined,
                  perPage,
                  undefined,
                  debouncedSearchValue,
                  undefined,
                ],
              });
            }}
            description={`Are you sure you want to Reject this Product Request - (${selectedProductRequestDetails.name})?`}
            cancelFunc={() => {
              setShowRejectionModal(false);
              setSelectedProductRequestDetails(null);
            }}
          />
        )}
    </div>
  );
};

export default ProductRequestTable;
