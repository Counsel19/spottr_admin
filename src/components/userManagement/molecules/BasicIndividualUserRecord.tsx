import type React from "react";

interface BasicIndividualUserRecordProps {
  icon: React.ReactNode;
  name: string;
  value: string;
}

const BasicIndividualUserRecord = ({
  icon,
  name,
  value,
}: BasicIndividualUserRecordProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#F0F1F3] grid place-content-center rounded-full overflow-hidden  p-[1rem]">
        {icon}
      </div>

      <div className="">
        <h5 className="leading-[2rem] text-[1.4rem] font-medium">{name}</h5>
        <span className="text-text-secondary">{value}</span>
      </div>
    </div>
  );
};

export default BasicIndividualUserRecord;
