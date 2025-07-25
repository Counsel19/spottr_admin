import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { IoMdOptions } from "react-icons/io";

const filterOptions = [
  {
    id: "none",
    name: "None",
  },
];

const FilterDropdown = () => {
  return (
    <Select>
      <SelectTrigger className="data-[size=default]:h-[4rem]">
        <IoMdOptions />
        <span>Filter by</span>
      </SelectTrigger>
      <SelectContent>
        {filterOptions &&
          filterOptions.map((item, index) => (
            <SelectItem
              key={index}
              value={item.id.toString()}
              className="capitalize"
            >
              {item.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
