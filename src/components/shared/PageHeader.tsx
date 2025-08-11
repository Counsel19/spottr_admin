import FilterDropdown from "@/components/userManagement/molecules/FilterDropdown";
import Searchbar from "@/components/shared/molecules/Searchbar";
import TabsBox from "@/components/shared/molecules/TabsBox";
import TabsBoxButton from "./molecules/TabsBoxButton";
import type React from "react";

interface PageHeaderPops {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  tabList?: { name: string; path: string }[];
  buttonTabLink?: { index: number; name: string }[];
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
  filters?: FilterField[];
  handleFilterChange?: (key: string, value: string) => void;
}

const PageHeader = ({
  searchTerm,
  setSearchTerm,
  tabList,
  buttonTabLink,
  activeIndex,
  setActiveIndex,
  filters,
  handleFilterChange,
}: PageHeaderPops) => {
  return (
    <div className="space-y-[2rem]">
      <div className="flex items-center justify-between">
        {tabList ? (
          <TabsBox tabs={tabList} />
        ) : buttonTabLink && activeIndex != undefined ? (
          <TabsBoxButton
            setActiveIndex={setActiveIndex}
            activeindex={activeIndex}
            tabs={buttonTabLink}
          />
        ) : (
          <div></div>
        )}

        <div className="flex items-center  gap-[1rem]">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {handleFilterChange && filters ? (
            <FilterDropdown
              onChange={handleFilterChange}
              filterGroups={filters}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
