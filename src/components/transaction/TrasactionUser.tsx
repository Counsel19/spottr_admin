import { getRoleBadgeColor } from "@/lib/utils";
import { Badge } from "../ui/badge";
import FieldValueItem from "../userManagement/molecules/FieldValueItem";

interface TrasactionUserProps {
  profileImage: string | null;
  name: string;
  userTypeOrRole: string;
}
const TrasactionUser = ({
  profileImage,
  name,
  userTypeOrRole,
}: TrasactionUserProps) => {
  return (
    <div className="p-[2rem] bg-white rounded-[1rem] shadow-sm">
      <div className="flex items-center gap-[2rem] p-[2rem] bg-[#F5F5F580] border  rounded-[1rem]">
        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
          <img
            src={profileImage || "/images/no-image-placeholder.png"}
            alt="Jumal Shariff"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[1.4rem]">
          <h3 className="font-bold">{name}</h3>
          <p className="">
            <Badge
              className={`${getRoleBadgeColor(
                userTypeOrRole
              )} border-0 font-medium`}
            >
              {userTypeOrRole}
            </Badge>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[2rem] mt-[1rem]">
        <FieldValueItem fieldName="ID" fieldValue="12312" />
        <FieldValueItem fieldName="Phone" fieldValue="12312" />
        <FieldValueItem fieldName="Email" fieldValue="12312" />
        <FieldValueItem fieldName="Fiat Wallet Balance" fieldValue="credit" />
      </div>
    </div>
  );
};

export default TrasactionUser;
