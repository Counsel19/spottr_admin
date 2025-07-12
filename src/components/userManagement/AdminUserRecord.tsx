import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MoreHorizontal, Edit, Trash2, UserX, UserCheck } from "lucide-react";
import UserAvatar from "../shared/molecules/UserAvatar";

interface AdminUserTableProps {
  user: IAdminUser;
}

const AdminUserRecord = ({ user }: AdminUserTableProps) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "administrator":
        return "bg-red-100 text-red-700 hover:bg-red-200";
      case "admin":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200";
      case "auditor":
        return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      case "marketplace manager":
        return "bg-green-100 text-green-700 hover:bg-green-200";
      case "content manager":
        return "bg-orange-100 text-orange-700 hover:bg-orange-200";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  };

  return (
    <tr
      key={user.id}
      className={`border-b mb-4 text-[1.4rem] border-gray-50 bg-[#F6F6F6] transition-colors hover:bg-gray-50/50 ${
        hoveredRow === user.id ? "bg-gray-50/50" : ""
      }`}
      onMouseEnter={() => setHoveredRow(user.id)}
      onMouseLeave={() => setHoveredRow(null)}
    >
      <td className="py-4 px-6">
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              user.status === "online" ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        </div>
      </td>
      <td className="py-4 px-6">
        <UserAvatar
          imgUrl={user.avatar}
          name={user.name}
          height="h-[4rem]"
          width="w-[4rem]"
        />
      </td>
      <td className="py-4 px-6">
        <div className="font-medium text-gray-900">{user.name}</div>
      </td>
      <td className="py-4 px-6">
        <div className="text-gray-600">{user.email}</div>
      </td>
      <td className="py-4 px-6">
        <Badge
          className={`${getRoleBadgeColor(user.role)} border-0 font-medium`}
        >
          {user.permission}
        </Badge>
      </td>
      <td className="py-4 px-6">
        <div className="text-gray-600 text-[1.4rem]">{user.lastLogin}</div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={`text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all ${
              hoveredRow === user.id ? "opacity-100" : "opacity-0"
            }`}
          >
            Select action
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 w-8 p-0 hover:bg-gray-100 transition-all ${
                  hoveredRow === user.id ? "opacity-100" : "opacity-60"
                }`}
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
                {user.status === "online" ? (
                  <>
                    <UserX className="size-6" />
                    Set Offline
                  </>
                ) : (
                  <>
                    <UserCheck className="size-6" />
                    Set Online
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
        </div>
      </td>
    </tr>
  );
};

export default AdminUserRecord;
