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
  
} from "lucide-react";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import { Link } from "react-router-dom";
import routeConstants from "@/constants/routes";
import type React from "react";
import ProductImgAvatar from "../shared/molecules/ProductImgAvatar";

interface ProductRecordProps {
  setSelectedProductDetails: React.Dispatch<React.SetStateAction<{
    id: string;
    isAvailable: boolean;
    name: string;
  } | null>>,

  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductRecord = ({ setSelectedProductDetails, setShowModal }: ProductRecordProps) => {
  const record: Column<IProductDetails>[] = [
    {
      key: "id",
      header: "ID",
      render: (product) => <span>{product.id.slice(0, 5)}...</span>,
    },

    {
      key: "product_image_one",
      header: "Image",
      render: (product) => (
        <ProductImgAvatar
          url={product.product_image_one}
          name={product.name}
        />
      ),
    },
    {
      key: "name",
      header: "Product Name",
      render: (product) => (
        <div className="font-medium text-gray-900  truncate max-w-[200px]">{product.name}</div>
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
              <Link className="flex gap-2" to={routeConstants.editProduct(product.id)}>
                <Edit className="size-6" />
                Edit Product
              </Link>
            </DropdownMenuItem>


            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {
              setSelectedProductDetails({
                name: product.name,
                isAvailable: product.is_available,
                id: product.id,
              })
              setShowModal(true)
            }} className="gap-2 text-red-600 focus:text-red-600">
              <Trash2 className="size-6" />
              Delete Product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return record
}




export default ProductRecord;
