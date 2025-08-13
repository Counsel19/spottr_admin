import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2, Check, XCircle, Pen } from "lucide-react";
import UserAvatar from "../shared/molecules/UserAvatar";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import { Link } from "react-router-dom";
import routeConstants from "@/constants/routes";
import ProductImgAvatar from "../shared/molecules/ProductImgAvatar";

const SubscriptionPlanRecord: Column<ISubscribersPlan>[] = [
  {
    key: "id",
    header: "ID",
    render: (plan) => <span>{plan.id.slice(0, 3)}...</span>,
  },
  {
    key: "image",
    header: "Image",
    render: (plan) => (
      <ProductImgAvatar
        url={plan.image || ""}
        name={plan.name || "N/A"}

      />
    ),
  },
  {
    key: "name",
    header: "Name",
    render: (plan) => <span>{plan.name || "N/A"}</span>,
  },
  {
    key: "amount",
    header: "Amount",
    render: (plan) => <span>{plan.amount || "N/A"}</span>,
  },

  {
    key: "status",
    header: "Status",
    render: (plan) => (
      <Badge
        className={`${getStatusBadgeColor(
          plan.is_active ? "active" : "inactive"
        )} capitalize border-0 font-medium`}
      >
        {plan.is_active ? "active" : "inactive"}
      </Badge>
    ),
  },
  {
    key: "actions",
    header: "",
    render: (plan) => (
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
            <Link
              className="flex gap-2"
              to={routeConstants.editSubscriptionPlan(plan.id)}
            >
              <Pen className="size-8" /> Edit Plan
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            {plan.is_active ? (
              <>
                <Check className="size-6" />
                Set Inactive
              </>
            ) : (
              <>
                <XCircle className="size-6" />
                Set Active
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 text-red-600 focus:text-red-600">
            <Trash2 className="size-6" />
            Delete Plan
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default SubscriptionPlanRecord;
