import { Badge } from "@/components/ui/badge";
import { getTransactionColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import UserAvatar from "../shared/molecules/UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Eye, MoreHorizontal } from "lucide-react";
import routeConstants from "@/constants/routes";
import { Link } from "react-router-dom";

const TransactionRecord: Column<ITransaction>[] = [
  {
    key: "id",
    header: "ID",
    render: (transaction) => <span>{transaction.id.slice(0, 5)}...</span>,
  },

  {
    key: "user",
    header: "User",
    render: (transaction) => (
      <div className="flex gap-2 items-center ">
        <UserAvatar
          imgUrl={transaction.user.pic!}
          name={transaction.user.user_name}
        />
        <p className="uppercase text-[1.4rem]">{transaction.user.user_name}</p>
      </div>
    ),
  },

  {
    key: "purpose",
    header: "Purpose",
    render: (transaction) => <span>{transaction.purpose}</span>,
  },
  {
    key: "amount",
    header: "Amount",
    render: (transaction) => <span>{transaction.amount}</span>,
  },

  {
    key: "status",
    header: "Status",
    render: (transaction) => (
      <Badge
        className={`${getTransactionColor(
          transaction.status
        )} capitalize border-0 font-medium`}
      >
        {transaction.status}
      </Badge>
    ),
  },

  {
    key: "actions",
    header: "Actions",
    render: (transaction) => (
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
            <Link
              className="flex gap-2"
              to={routeConstants.viewTransaction(transaction.id)}
            >
              <Eye className="size-6" />
              View Transaction
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default TransactionRecord;
