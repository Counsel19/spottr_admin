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
        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[70%]">
          <SelectValue placeholder="-Select State-" />
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
