import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface TabsBoxProps {
  tabs: {
    name: string;
    path: string;
  }[];
}

const TabsBox = ({ tabs }: TabsBoxProps) => {
  const location = useLocation();

  return (
    <div className="flex gap-2 border rounded-[0.8rem] p-2">
      {tabs.map((tab, index) => (
        <Link
          to={tab.path}
          key={index}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-14 py-0 bg-transparent text-muted hover:bg-[#274B891A]",
            ((tab.path !== "/dashboard" &&
              location.pathname.includes(tab.path)) ||
              (location.pathname === "/dashboard" &&
                location.pathname === tab.path)) &&
              "bg-[#274B891A] text-primary"
          )}
        >
          {tab.name}
        </Link>
      ))}
      <hr />
    </div>
  );
};

export default TabsBox;
