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
import {
  getKYCLevelBadgeColor,
  getRoleBadgeColor,
  getStatusBadgeColor,
} from "@/lib/utils";
import type { Column } from "../shared/AppTable";

const IndividualUserRecord: Column<IIndividualUser>[] = [
  {
    key: "id",
    header: "ID",
    render: (user) => <span>{user.id.slice(0, 3)}...</span>,
  },
  {
    key: "pic",
    header: "Avatar",
    render: (user) => (
      <UserAvatar
        imgUrl={user.pic || ""}
        name={user.profile?.first_name || "N/A"}
        height="h-[4rem]"
        width="w-[4rem]"
      />
    ),
  },
  {
    key: "name",
    header: "Name",
    render: (user) => (
      <span>{`${user.profile?.first_name} ${user.profile?.last_name}`}</span>
    ),
  },
  {
    key: "email",
    header: "Email",
    render: (user) => <div className="text-gray-600">{user.email}</div>,
  },
  {
    key: "phone",
    header: "Phone",
    render: (user) => <div className="text-gray-600">{user.phone}</div>,
  },
  {
    key: "role",
    header: "Role",
    render: (user) => (
      <Badge className={`${getRoleBadgeColor(user.role)} border-0 font-medium`}>
        {user.role}
      </Badge>
    ),
  },
  {
    key: "address",
    header: "Address",
    render: (user) => (
      <div className="text-gray-600">{user.profile?.address}</div>
    ),
  },
  {
    key: "kyc",
    header: "KYC Level",
    render: (user) => {
      const kyc = getKYCLevelBadgeColor(user.profile.verification_level);
      return (
        <Badge className={`${kyc.styleClasses} border-0 font-medium`}>
          {kyc.name}
        </Badge>
      );
    },
  },
  {
    key: "status",
    header: "Status",
    render: (user) => (
      <Badge
        className={`${getStatusBadgeColor(
          user.is_active ? "active" : "inactive"
        )} capitalize border-0 font-medium`}
      >
        {user.is_active ? "active" : "inactive"}
      </Badge>
    ),
  },
  {
    key: "actions",
    header: "",
    render: (user) => (
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
            {user.is_active ? (
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

export default IndividualUserRecord;
