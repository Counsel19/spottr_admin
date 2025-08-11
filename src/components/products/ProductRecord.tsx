import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  CircleCheckBig,
  CircleX,
} from "lucide-react";
import UserAvatar from "../shared/molecules/UserAvatar";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";

const ProductRecord: Column<IProductDetails>[] = [
  {
    key: "id",
    header: "ID",
    render: (product) => <span>{product.id.slice(0, 5)}...</span>,
  },

  {
    key: "product_image_one",
    header: "Image",
    render: (product) => (
      <UserAvatar
        imgUrl={product.product_image_one}
        name={product.name}
        height="h-[4rem]"
        width="w-[4rem]"
      />
    ),
  },
  {
    key: "name",
    header: "Product Name",
    render: (product) => (
      <div className="font-medium text-gray-900">{product.name}</div>
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
    render: (product) => <span>{product.subcategory.name}</span>,
  },

  {
    key: "brand.name",
    header: "Brand",
    render: (product) => <span>{product.brand.name}</span>,
  },
  {
    key: "status",
    header: "Status",
    render: (product) => (
      <Badge
        className={`${getStatusBadgeColor(
          product.is_available ? "active" : "inactive"
        )} capitalize border-0 font-medium`}
      >
        {product.is_available ? "Available" : "Unavailable"}
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
          <DropdownMenuItem className="gap-2">
            <Edit className="size-6" />
            Edit Product
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            {product.is_available ? (
              <>
                <CircleX className="size-6" />
                Set Unavailable
              </>
            ) : (
              <>
                <CircleCheckBig className="size-6" />
                Set Available
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 text-red-600 focus:text-red-600">
            <Trash2 className="size-6" />
            Delete Product
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default ProductRecord;
