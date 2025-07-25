import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type React from "react";

interface TabsBoxButtonProps {
  tabs: {
    name: string;
    index: number;
  }[];
  activeindex: number;
  setActiveIndex?:  React.Dispatch<React.SetStateAction<number>>;
}

const TabsBoxButton = ({
  tabs,
  activeindex,
  setActiveIndex,
}: TabsBoxButtonProps) => {
  return (
    <div className="flex gap-2 border rounded-[0.8rem] p-2">
      {tabs.map((tab, index) => (
        <Button
          onClick={() => setActiveIndex && setActiveIndex(index)}
          key={index}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-14 py-0 bg-transparent text-muted hover:bg-[#274B891A]",

            activeindex == tab.index && "bg-[#274B891A] text-primary"
          )}
        >
          {tab.name}
        </Button>
      ))}
      <hr />
    </div>
  );
};

export default TabsBoxButton;
