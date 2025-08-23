import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import TransactionsTable from "@/components/transaction/TransactionTable";
import { useState } from "react";

const IndustriesHome = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-[1rem] space-y-[4rem] ">
            <SecondaryHeader
                title="View Transactions"
                subTitle="View Transactions here"

            />

            <PageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <TransactionsTable searchTerm={searchTerm} />
        </div>
    );
};

export default IndustriesHome;
