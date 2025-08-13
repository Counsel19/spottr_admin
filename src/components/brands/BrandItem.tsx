import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";
import type { Column } from "../shared/AppTable";
import UserAvatar from "../shared/molecules/UserAvatar";
import { Link } from "react-router-dom";
import routeConstants from "@/constants/routes";

interface BrandItemProps {
  setSelectedBrandDetails: React.Dispatch<React.SetStateAction<{
    id: string;
    name: string;
  } | null>>,

  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BrandItem = ({ setSelectedBrandDetails, setShowModal }: BrandItemProps) => {


  const record: Column<IBrand>[] = [
    {
      key: "id",
      header: "ID",
      render: (category) => <span>{category.id.slice(0, 5)}...</span>,
    },
    {
      key: "image",
      header: "Image",
      render: (brand) => (
        <UserAvatar
          imgUrl={brand.image}
          name={brand.name}
          height="h-[4rem]"
          width="w-[4rem]"
        />
      ),
    },
    {
      key: "name",
      header: "Name",
      render: (category) => <span className="capitalize">{category.name}</span>,
    },
    {
      key: "category.name",
      header: "Category",
      render: (category) => (
        <span className="capitalize">{category.category.name}</span>
      ),
    },

    {
      key: "actions",
      header: "",
      render: (brand) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-100 transition-all opacity-100"
            >
              <MoreHorizontal className="size-8" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[20rem] space-y-[1rem] p-4"
          >
            <DropdownMenuItem className="gap-2">
              <Link className="flex gap-2" to={routeConstants.editBrand(brand.id)}>
                <Edit className="size-6" />
                Edit Brand
              </Link>


            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem onSelect={() => {
              setSelectedBrandDetails({
                name: brand.name,
                id: brand.id,
              })
              setShowModal(true)
            }} className="gap-2 text-red-600 focus:text-red-600">
              <Trash2 className="size-6" />
              Delete Brand
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return record
}




export default BrandItem;
