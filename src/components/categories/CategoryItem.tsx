import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, UserX, UserCheck, MoreHorizontal } from "lucide-react";
import UserAvatar from "../shared/molecules/UserAvatar";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";

const CategoryItem: Column<ICategory>[] = [
  {
    key: "id",
    header: "ID",
    render: (category) => <span>{category.id.slice(0, 5)}...</span>,
  },
  {
    key: "image",
    header: "Category Image",
    render: (category) => (
      <UserAvatar
        imgUrl={category.image || ""}
        name={category.name || "N/A"}
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
    key: "status",
    header: "Status",
    render: (category) => (
      <Badge
        className={`${getStatusBadgeColor(
          category.is_active ? "active" : "inactive"
        )} capitalize border-0 font-medium`}
      >
        {category.is_active ? "active" : "inactive"}
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
            <Edit className="size-6" />
            Edit Category
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            {category.is_active ? (
              <>
                <UserX className="size-6" />
                Set Inactive
              </>
            ) : (
              <>
                <UserCheck className="size-6" />
                Set Active
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 text-red-600 focus:text-red-600">
            <Trash2 className="size-6" />
            Delete Category
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default CategoryItem;
