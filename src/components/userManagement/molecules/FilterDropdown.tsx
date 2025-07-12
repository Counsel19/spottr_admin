import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filterOptions = [
  {
    id: "none",
    name: "None",
  },
];

const FilterDropdown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Select" />
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
    </div>
  );
};

export default FilterDropdown;
