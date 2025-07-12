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
    <div>
      {tabs.map((tab, index) => (
        <Link
          to={tab.path}
          key={index}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-18 py-0 hover:bg-transparent border-b-4 border-transparent rounded-none hover:border-[hsl(138,63%,36%)], ",
            ((tab.path !== "/dashboard" &&
              location.pathname.includes(tab.path)) ||
              (location.pathname === "/dashboard" &&
                location.pathname === tab.path)) &&
              "border-primary"
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
