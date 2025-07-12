import { selectSubLinks } from "@/lib/redux/slices/routingSlice";
import type { AppDispatch } from "@/lib/redux/store";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  name: string;
  path: string;
  subLinks?: {
    name: string;
    path: string;
  }[];
}
const SidebarItem = ({ icon, subLinks, name, path }: SidebarItemProps) => {
  const location = useLocation();

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Link
      onClick={() => {
        dispatch(selectSubLinks(subLinks));
      }}
      to={path}
      className={cn(
        "flex relative gap-2 justify-center items-center w-full py-2 h-[6rem] hover:cursor-pointer  text-[1rem] text-gray-500 hover:bg-primary hover:text-white transition-colors duration-200",
        ((path !== "/dashboard" && location.pathname.includes(path)) ||
          (location.pathname === "/dashboard" && location.pathname === path)) &&
          "bg-primary text-white"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        {icon}
        <span>{name}</span>
        {subLinks && subLinks.length > 0 && (
          <ChevronDown className="size-4 absolute right-[1.5rem]" />
        )}
      </div>
    </Link>
  );
};

export default SidebarItem;
