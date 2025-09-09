import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Check, Ban } from "lucide-react";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";

import type React from "react";
import ProductImgAvatar from "../shared/molecules/ProductImgAvatar";

interface ProductRecordProps {
  setSelectedProductDetails: React.Dispatch<
    React.SetStateAction<{
      id: string;
      isApprove: boolean;
      brandId?: string;
      corporateProfileId?: string;
      name: string;
    } | null>
  >;

  setShowRejectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowApprovalModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductRequestRecord = ({
  setSelectedProductDetails,
  setShowApprovalModal,
  setShowRejectionModal,
}: ProductRecordProps) => {
  const record: Column<IProductRequest>[] = [
    {
      key: "id",
      header: "ID",
      render: (product) => <span>{product.id.slice(0, 5)}...</span>,
    },

    {
      key: "product_image_one",
      header: "Image",
      render: (product) => (
        <ProductImgAvatar url={product.product_image_one} name={product.name} />
      ),
    },
    {
      key: "name",
      header: "Product Name",
      render: (product) => (
        <div className="font-medium text-gray-900  truncate max-w-[200px]">
          {product.name}
        </div>
      ),
    },
    { key: "price", header: "Price" },
    {
      key: "category.name",
      header: "Category",
      render: (product) => <span>{product.category.name}</span>,
    },
    {
      key: "subcategory.name",
      header: "Sub Category",
      render: (product) => (
        <span className="capitalize">{product.subcategory.name}</span>
      ),
    },

    {
      key: "brand.name",
      header: "Brand",
      render: (product) => <span>{product.brand?.name || "N/A"}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (product) => (
        <Badge
          className={`${getStatusBadgeColor(
            product.is_approved
              ? "active"
              : product.is_approved == null
              ? ""
              : "inactive"
          )} capitalize border-0 font-medium`}
        >
          {product.is_approved
            ? "Approved"
            : product.is_approved == null
            ? "Pending"
            : "Not Approved"}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (product) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-100 opacity-60 hover:opacity-100"
            >
              <MoreHorizontal className="size-8" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[20rem] space-y-[1rem] p-4"
          >
            <DropdownMenuItem
              disabled={!!product.is_approved}
              onSelect={() => {
                setSelectedProductDetails({
                  name: product.name,
                  id: product.id,
                  isApprove: true,
                });
                setShowApprovalModal(true);
              }}
              className="gap-2 text-emerald-600 focus:text-emerald-600"
            >
              <Check className="size-6" />
              Approve Request
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              disabled={!product.is_approved}
              onSelect={() => {
                setSelectedProductDetails({
                  name: product.name,
                  id: product.id,
                  isApprove: false,
                });
                setShowRejectionModal(true);
              }}
              className="gap-2 text-red-600 focus:text-red-600"
            >
              <Ban className="size-6" />
              Reject Product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return record;
};

export default ProductRequestRecord;
