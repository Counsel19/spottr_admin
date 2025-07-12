import CategoryItem from "@/components/categories/CategoryItem";
import PageHeader from "@/components/shared/PageHeader";

const categryItem = [
  {
    id: 1,
    name: "IT Engineer",
    image: "/images/farm_category.svg",
  },
  {
    id: 2,
    name: "Farmer",
    image: "/images/farm_category.svg",
  },
  {
    id: 3,
    name: "Phones",
    image: "/images/farm_category.svg",
  },
  {
    id: 4,
    name: "Fashion",
    image: "/images/farm_category.svg",
  },
  {
    id: 5,
    name: "Real Estate",
    image: "/images/farm_category.svg",
  },
  {
    id: 6,
    name: "Mechanic",
    image: "/images/farm_category.svg",
  },
  {
    id: 7,
    name: "Food Vendor",
    image: "/images/farm_category.svg",
  },
  {
    id: 8,
    name: "Logistics",
    image: "/images/farm_category.svg",
  },
  {
    id: 9,
    name: "Education",
    image: "/images/farm_category.svg",
  },
  {
    id: 10,
    name: "Health & Wellness",
    image: "/images/farm_category.svg",
  },
  {
    id: 11,
    name: "Construction",
    image: "/images/farm_category.svg",
  },
  {
    id: 12,
    name: "Freelance",
    image: "/images/farm_category.svg",
  },
];

const CategoryHome = () => {
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <PageHeader
        pageTitle="Categories"
        createText="Create Categories"
        deleteText={`Delete Categories >`}
      />

      <div className="grid  grid-cols-6 gap-[1rem]">
        {categryItem.map((item) => (
          <CategoryItem key={item.id} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
