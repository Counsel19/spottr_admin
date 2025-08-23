import { Badge } from "@/components/ui/badge";
import { useGetIndustryById } from "@/lib/api/industries";
import { Calendar, Loader2, MapPin, PillBottle, Users } from "lucide-react";
import { format } from "date-fns";

interface UserDetailsHeaderProps {
  companyName: string;
  isActive: boolean;
  role: string;
  companyAddress: string;
  createdAt?: string;
  industryId?: string;
  image: string
}

const UserDetailsHeader = ({
  companyName,
  industryId,
  companyAddress,
  createdAt,
  isActive,
  image,
  role,
}: UserDetailsHeaderProps) => {
  const { data, isLoading } = useGetIndustryById(industryId);
 
  return (
    <div className="header-gradient  px-[2rem] py-[4rem] rounded-[1rem]">
      <div className="flex items-center gap-[2rem]">
        <div className="w-[8rem] h-[8rem] overflow-hidden bg-white rounded-full flex items-center justify-center">
          <img
            src={image}
            alt={companyName}
            className="w-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-[2rem]">
          <h1 className="text-[3rem] font-bold text-white">{companyName}</h1>
          <div className="flex items-center gap-[1rem]">
            <Badge variant={isActive ? "active" : "destructive"}>
              {isActive ? "Active" : "Inactive"}
            </Badge>
            <Badge variant="corporate">{role || "N/A"}</Badge>
          </div>
          <div className="flex items-center gap-[2rem] mt-[2rem] text-white/70 text-[1.4rem]">
            <span className="flex gap-2 items-center">
              <MapPin /> {companyAddress}
            </span>
            <span className="flex gap-2 items-center">
              <Calendar /> Joined{" "}
              {createdAt ? format(createdAt, "dd MMMM yyyy hh:mm a") : "N/A"}
            </span>
            <span className="flex gap-2 items-center">
              <Users />
              {isLoading ? <Loader2 /> : data?.name || "N/A"}
            </span>
            <span className="flex gap-2 items-center">
              <PillBottle /> 250 Products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsHeader;
