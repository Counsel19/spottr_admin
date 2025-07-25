import CategoryTable from "@/components/categories/CategoryTable";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { useState } from "react";

const CategoryHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Category Management"
        subTitle="Manage your list of categories"
        addButtonText="+ Create New Category"
      />
      <PageHeader />

      <CategoryTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default CategoryHome;
