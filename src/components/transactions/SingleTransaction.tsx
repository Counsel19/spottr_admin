import { format } from "date-fns";
import FieldValueItem from "../userManagement/molecules/FieldValueItem";
import TrasactionUser from "../transaction/TrasactionUser";

const SingleTransaction = () => {
  return (
    <div className="grid grid-cols-[3fr_2fr] gap-[2rem] ">
      <div className="p-[2rem] bg-white rounded-[1rem] shadow-sm">
        <div className=" mb-[2rem] border grid place-content-center rounded-[1rem] bg-[#F5F5F580] p-[2rem]">
          <div className="w-fit">
            <h4 className="font-bold text-[4rem] text-center leading-[4rem]">
              N60,000
            </h4>
            <p className="text-[1.4rem] text-center text-[#A5A5A5]">
              Total Amount
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[2rem]">
          <FieldValueItem fieldName="ID" fieldValue="12312" />
          <FieldValueItem fieldName="Wallet ID" fieldValue="12312" />
          <FieldValueItem fieldName="Reference" fieldValue="12312" />
          <FieldValueItem fieldName="Type" fieldValue="credit" />
          <FieldValueItem fieldName="Format" fieldValue="fiat" />
          <FieldValueItem fieldName="Purpose" fieldValue="wallet-top-up" />
          <FieldValueItem fieldName="Status" fieldValue="successful" />
          <FieldValueItem
            fieldName="Date"
            fieldValue={format(
              "2025-07-11T16:31:19.000000Z",
              "dd MMMM yyyy hh:mm a"
            )}
          />
        </div>
      </div>
      <TrasactionUser
        name="James Fred"
        profileImage={"/images/avatar.png"}
        userTypeOrRole="buyer"
      />
    </div>
  );
};

export default SingleTransaction;
