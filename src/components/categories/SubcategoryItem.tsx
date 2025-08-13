import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import type React from "react";
import routeConstants from "@/constants/routes";
import { Link } from "react-router-dom";


interface SubcategoryItemProps {
  setSelectedCategoryDetails: React.Dispatch<React.SetStateAction<{
    id: string;
    name: string;
  } | null>>,

  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}


const SubcategoryItem = ({ setSelectedCategoryDetails, setShowModal }: SubcategoryItemProps) => {

  const record: Column<ISubcategory>[] = [
    {
      key: "id",
      header: "ID",
      render: (category) => <span>{category.id.slice(0, 5)}...</span>,
    },

    {
      key: "name",
      header: "Name",
      render: (category) => <span className="capitalize">{category.name}</span>,
    },
    {
      key: "category.name",
      header: "Parent Category",
      render: (category) => (
        <span className="capitalize">{category.category.name}</span>
      ),
    },

    {
      key: "status",
      header: "Status",
      render: () => (
        <Badge
          className={`${getStatusBadgeColor(
            "active"
          )} capitalize border-0 font-medium`}
        >
          {"active"}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "",
      render: (category) => (
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


              <Link className="flex gap-2" to={routeConstants.editSubCategory(category.id)}>
                <Edit className="size-6" />
                Edit Sub Category
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {
              setSelectedCategoryDetails({
                name: category.name,
                id: category.id,
              })
              setShowModal(true)
            }} className="gap-2 text-red-600 focus:text-red-600">
              <Trash2 className="size-6" />
              Delete Sub Category
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return record
}

export default SubcategoryItem


