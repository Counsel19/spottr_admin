import { Badge } from "@/components/ui/badge";
import {  getTransactionColor } from "@/lib/utils";
import type { Column } from "../shared/AppTable";
import UserAvatar from "../shared/molecules/UserAvatar";

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
                <UserAvatar imgUrl={transaction.user.pic!} name={transaction.user.user_name} />
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

];


export default TransactionRecord

