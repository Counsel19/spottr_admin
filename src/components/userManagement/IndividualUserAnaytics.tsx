import { TbMessage2Check, TbUserShare, TbHeartSearch } from "react-icons/tb";
import { LuEye } from "react-icons/lu";

const IndividualUserAnaytics = () => {
  return (
    <div className="p-[2rem] w-full flex gap-[2rem] rounded-[1rem] shadow-sm text-[1.4rem]">
      <div className="border w-full rounded-md p-4 bg-[#F9F9FC]">
        <div className="w-fit mx-auto space-y-[1rem]">
          <div className="flex gap-4">
            <LuEye size={20} />
            Total Purchase
          </div>

          <h4 className="text-center text-[3.2rem] font-medium">247</h4>
        </div>
      </div>
      <div className="border w-full rounded-md p-4 bg-[#F9F9FC]">
        <div className="w-fit mx-auto space-y-[1rem]">
          <div className="flex gap-4">
            <TbHeartSearch size={20} />
            Total Spent
          </div>

          <h4 className="text-center text-[3.2rem] font-medium">247</h4>
        </div>
      </div>
      <div className="border w-full rounded-md p-4 bg-[#F9F9FC]">
        <div className="w-fit mx-auto space-y-[1rem]">
          <div className="flex gap-4">
            <TbMessage2Check size={20} />
            Avg Order Value
          </div>

          <h4 className="text-center text-[3.2rem] font-medium">247</h4>
        </div>
      </div>
      <div className="border w-full rounded-md p-4 bg-[#F9F9FC]">
        <div className="w-fit mx-auto space-y-[1rem]">
          <div className="flex gap-4">
            <TbUserShare size={20} />
            Verification Level
          </div>

          <h4 className="text-center text-[3.2rem] font-medium">0</h4>
        </div>
      </div>
    </div>
  );
};

export default IndividualUserAnaytics;
