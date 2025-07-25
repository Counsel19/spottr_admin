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
import { getRoleBadgeColor, getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";




 const AdminUserRecord: Column<IAdminUser>[] = [
    { key: "id", header: "ID" },
    {
      key: "avatar",
      header: "Photo",
      render: (user) => (
        <UserAvatar
          imgUrl={user.avatar}
          name={user.name}
          height="h-[4rem]"
          width="w-[4rem]"
        />
      ),
    },
    {
      key: "name",
      header: "Full Name",
      render: (user) => <div className="font-medium text-gray-900">{user.name}</div>,
    },
    { key: "username", header: "Username" },
    {
      key: "role",
      header: "Role",
      render: (user) => (
        <Badge className={`${getRoleBadgeColor(user.role)} border-0 font-medium`}>
          {user.permission}
        </Badge>
      ),
    },
    { key: "phoneNumber", header: "Phone" },
    { key: "email", header: "Email Address" },
    {
      key: "status",
      header: "Status",
      render: (user) => (
        <Badge className={`${getStatusBadgeColor(user.status)} capitalize border-0 font-medium`}>
          {user.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (user) => (
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
          <DropdownMenuContent align="end" className="w-[20rem] space-y-[1rem] p-4">
            <DropdownMenuItem className="gap-2">
              <Edit className="size-6" />
              Edit User
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              {user.status === "active" ? (
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

export default AdminUserRecord;
