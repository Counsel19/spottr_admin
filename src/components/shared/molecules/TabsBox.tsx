import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface TabsBoxProps {
  tabs: {
    name: string;
    path: string;
  }[];
}

function isActivePath(tabPath: string, currentPath: string) {
  const tabSegments = tabPath.split("/").filter(Boolean);
  const currentSegments = currentPath.split("/").filter(Boolean);

  // exact match
  if (currentPath === tabPath) return true;

  // check if current is a child of tab
  if (
    currentSegments.length > tabSegments.length &&
    currentSegments.slice(0, tabSegments.length).join("/") ===
      tabSegments.join("/")
  ) {
    return true;
  }

  return false;
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
            isActivePath(tab.path, location.pathname) &&
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
