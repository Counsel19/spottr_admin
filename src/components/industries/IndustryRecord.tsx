import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import { Link } from "react-router-dom";
import routeConstants from "@/constants/routes";
import type React from "react";

interface IndustryRecordProps {
  setSelectedIndustryDetails: React.Dispatch<React.SetStateAction<{
    id: string;
    name: string;
  } | null>>,

  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const IndustryRecord = ({ setSelectedIndustryDetails, setShowModal }: IndustryRecordProps) => {

  const record: Column<IIndustry>[] = [
    {
      key: "id",
      header: "ID",
      render: (industry) => <span>{industry.id.slice(0, 5)}...</span>,
    },

    {
      key: "name",
      header: "Industry Name",
      render: (user) => (
        <div className="font-medium text-gray-900">{user.name}</div>
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
      header: "Actions",
      render: (industry) => (
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

              <Link className="flex gap-2" to={routeConstants.editIndustry(industry.id)}>
                <Edit className="size-6" />
                Edit Industry
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {
              setSelectedIndustryDetails({
                name: industry.name,
                id: industry.id,
              })
              setShowModal(true)
            }} className="gap-2 text-red-600 focus:text-red-600">
              <Trash2 className="size-6" />
              Delete Industry
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return record
}

export default IndustryRecord

