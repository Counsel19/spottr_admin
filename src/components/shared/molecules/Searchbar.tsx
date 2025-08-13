import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import type React from "react";

interface SearchbarProps {
  styleClasses?: string;
  showIconInFront?: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar = ({
  searchTerm,
  setSearchTerm,
  styleClasses,
  showIconInFront = true,
}: SearchbarProps) => {
  return (
    <form
      className={cn(
        "flex  items-center gap-3 lg:min-w-[25rem] text-gray-700 rounded-[0.8rem] border border-light-blue py-2 pl-3 pr-6",
        styleClasses
      )}
    >
      {showIconInFront && <Search />}
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Items here..."
        className="border-0 bg-transparent h-12 ring-offset-none outline-none shadow-none focus-visible:outline-none focus-visible:ring-none focus-visible:ring-transparent"
      />

      {!showIconInFront && <Search />}
    </form>
  );
};

export default Searchbar;
