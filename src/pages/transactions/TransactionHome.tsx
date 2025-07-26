import SecondaryHeader from "@/components/shared/SecondaryHeader";
import TransactionChartCard from "@/components/transactions/TransactionChartCard";
import TransactionTypeCard from "@/components/transactions/TransactionTypeCard";
import { Button } from "@/components/ui/button";

const TransactionHome = () => {
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Transactions"
        subTitle="Manage your list of Transactions"
      />

      <div className="grid grid-cols-2 gap-4 justify-between ">
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 rounded-[0.546rem] w-full p-4 bg-primary items-center text-white">
            <span>Income Overall</span>
            <h4 className="text-[2.3rem] ">N345,847,895</h4>
          </div>
          <div className="flex rounded-[0.546rem] gap-4 w-full p-4 bg-destructive items-center text-white">
            <span>Outpaid Overall</span>
            <h4 className="text-[2.3rem] ">N345,847,895</h4>
          </div>
        </div>

        <div className="flex gap-[2rem] items-center justify-self-end">
          <Button className="" variant={"outline"}>
            View Wallet &gt;
          </Button>

          <Button className="border-primary text-primary " variant={"outline"}>
            Make Withdrawal &gt;
          </Button>
          <Button
            className="border-[#5FC146] text-[#5FC146]"
            variant={"outline"}
          >
            Add Funds &gt;
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <TransactionChartCard />
          <TransactionChartCard />
        </div>
        <div className="space-y-4">
          <TransactionTypeCard title={"Fiat and Debit Cards"} />
          <TransactionTypeCard title={"Logistics"} />
          <TransactionTypeCard title={"Ads"} />
        </div>
      </div>
    </div>
  );
};

export default TransactionHome;
