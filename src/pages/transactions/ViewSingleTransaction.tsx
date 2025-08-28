import SecondaryHeader from "@/components/shared/SecondaryHeader";
import SingleTransaction from "@/components/transactions/SingleTransaction";

const ViewSingleTransaction = () => {
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="View Transaction"
        subTitle="View single transaction details here"
        showBackButton
      />

      <SingleTransaction />
    </div>
  );
};

export default ViewSingleTransaction;
