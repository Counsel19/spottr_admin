import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import TransactionsTable from "@/components/transaction/TransactionTable";
import type { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

const IndustriesHome = () => {
  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="View Transactions"
        subTitle="View Transactions here"
      />

      <PageHeader tabList={selectedSubLinks} />

      <TransactionsTable />
    </div>
  );
};

export default IndustriesHome;
