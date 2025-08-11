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

const CategoryItem: Column<ICategory>[] = [
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
    render: () => (
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
