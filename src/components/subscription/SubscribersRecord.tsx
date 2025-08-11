import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2, UserX, UserCheck } from "lucide-react";
import UserAvatar from "../shared/molecules/UserAvatar";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";

const SubscribersRecord: Column<ISubscribers>[] = [
  {
    key: "id",
    header: "ID",
    render: (subscribers) => <span>{subscribers.id.slice(0, 3)}...</span>,
  },
  {
    key: "pic",
    header: "Avatar",
    render: (subscribers) => (
      <UserAvatar
        imgUrl={subscribers.user.pic || ""}
        name={subscribers.user?.profile?.first_name || "N/A"}
        height="h-[4rem]"
        width="w-[4rem]"
      />
    ),
  },
  {
    key: "user_type",
    header: "User Type",
    render: (subscribers) => (
      <span>{subscribers.user?.profile?.type || "N/A"}</span>
    ),
  },
  {
    key: "amount",
    header: "Amount",
    render: (subscribers) => (
      <div className="text-gray-600">
        {subscribers.subscription_plan.amount || "N/A"}
      </div>
    ),
  },
  {
    key: "plan",
    header: "Plan",
    render: (subscribers) => (
      <div className="text-gray-600">{subscribers.subscription_plan.name}</div>
    ),
  },
  {
    key: "duration",
    header: "Duration",
    render: (subscribers) => (
      <div className="text-gray-600">
        <p>
          {subscribers.start_date} - {subscribers.end_date}
        </p>
        <p>{subscribers.duration_months} Month(s)</p>
      </div>
    ),
  },

  {
    key: "status",
    header: "Status",
    render: (subscribers) => (
      <Badge
        className={`${getStatusBadgeColor(
          subscribers.is_active ? "active" : "inactive"
        )} capitalize border-0 font-medium`}
      >
        {subscribers.is_active ? "active" : "inactive"}
      </Badge>
    ),
  },
  {
    key: "actions",
    header: "",
    render: (subscribers) => (
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
            Edit User
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            {subscribers.is_active ? (
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
            Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default SubscribersRecord;
