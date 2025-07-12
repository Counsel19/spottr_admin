import { cn } from "@/lib/utils";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface QuickInfoStatsCardProps {
  value: string;
  icon: React.ReactNode;
  title: string;
  analytics: {
    percentage: number;
    isPositive: boolean;
  };
}
const QuickInfoStatsCard = ({
  icon,
  value,
  title,
  analytics,
}: QuickInfoStatsCardProps) => {
  return (
    <div className="border flex flex-col justify-between h-[10.7rem] border-light-blue bg-white rounded-[1rem] p-4 ">
      <div className="flex items-center justify-between ">
        <h4 className="text-[2.4rem] font-bold leading-[2.4rem]">{value}</h4>
        <div className="shadow-lg rounded-md p-2 text-sky-blue">{icon}</div>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-[1.6rem] font-normal">{title}</span>

        <div className={cn("text-[1.4rem] ", analytics.isPositive ? "" : "")}>
          {analytics.isPositive ? (
            <div className="text-success flex items-center gap-1">
              <span> +${analytics.percentage}% </span>
              <FaCaretUp />
            </div>
          ) : (
            <div className="text-destructive flex items-center gap-1">
              <span>-${analytics.percentage}% </span> <FaCaretDown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickInfoStatsCard;
