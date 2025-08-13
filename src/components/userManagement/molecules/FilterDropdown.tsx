import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface FilterByDropdownProps {
  filterGroups?: FilterField[];
  onChange: (key: string, value: string) => void;
}

function FilterDropdown({ filterGroups, onChange }: FilterByDropdownProps) {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const currentGroup = filterGroups?.find((f) => f.key === selectedKey);

  const handleKeyChange = (key: string) => {
    setSelectedKey(key);
    setSelectedValue("");
  };

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (selectedKey) {
      onChange(selectedKey, value);
    }
  };

  return (
    <div className="flex lg:min-w-[35rem] flex-col md:flex-row justify-between gap-4">
      {/* Dropdown 1: Filter by */}
      <div className="flex gap-1 items-center ">
        <label htmlFor="filterKey" className="text-[1.4rem] ">Filter By</label>
        <Select value={selectedKey} onValueChange={handleKeyChange}>
          <SelectTrigger id="filterKey" className="data-[size=default]:h-[4rem]">
            <SelectValue placeholder="Select filter" />
          </SelectTrigger>
          <SelectContent>
            {filterGroups?.map((group) => (
              <SelectItem key={group.key} value={group.key}>
                {group.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Dropdown 2: Filter value */}
      <div className="flex items-center  gap-1">
        <label htmlFor="filterValue" className="text-[1.4rem] w-full">Filter Key</label>
        {selectedKey && currentGroup ? (
          <Select value={selectedValue} onValueChange={handleValueChange}>
            <SelectTrigger id="filterValue" className="data-[size=default]:h-[4rem]">
              <SelectValue placeholder={`Select ${currentGroup.label}`} />
            </SelectTrigger>
            <SelectContent>
              {currentGroup.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Select
            disabled
            value={selectedValue}
            onValueChange={handleValueChange}
          >
            <SelectTrigger className="data-[size=default]:h-[4rem]">
              <SelectValue placeholder={`Select Value`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"none"}>None</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;
