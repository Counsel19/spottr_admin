import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2, UserX, UserCheck, Eye } from "lucide-react";
import UserAvatar from "../shared/molecules/UserAvatar";
import { getStatusBadgeColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import { Link } from "react-router-dom";
import routeConstants from "@/constants/routes";
import type React from "react";


interface CorporateUserRecordProps {
  setSelectedProfileDetails: React.Dispatch<React.SetStateAction<{
    id: string;
    isActive: boolean;
  } | null>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function CorporateUserRecord({ setSelectedProfileDetails, setShowModal }: CorporateUserRecordProps) {

  const record: Column<ICorporateUser>[] = [

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
          name={user.profile?.company_name || "N/A"}
          height="h-[4rem]"
          width="w-[4rem]"
        />
      ),
    },
    {
      key: "company_name",
      header: "Company",
      render: (user) => <span>{user.profile?.company_name}</span>,
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
      key: "company_size",
      header: "Company Size",
      render: (user) => (
        <div className="text-gray-600">{user.profile?.company_size}</div>
      ),
    },
    {
      key: "company_address",
      header: "Address",
      render: (user) => (
        <div className="text-gray-600">{user.profile?.company_address}</div>
      ),
    },
    {
      key: "product",
      header: "Product",
      render: () => <div className="text-gray-600">Health</div>, // Hardcoded for now
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
              <Link className="flex gap-2" to={routeConstants.viewCorporateUser(user.profile?.user_id)}>
                <Eye className="size-6" />
                View User
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Link className="flex gap-2" to={routeConstants.editCorporateUser(user.profile?.user_id)}>
                <Edit className="size-6" />
                Edit User
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {
              setSelectedProfileDetails({
                id: user.profile?.user_id || "",
                isActive: !!user.is_active
              })
              setShowModal(true)
            }} className="gap-2">
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

  return record
}

export default CorporateUserRecord