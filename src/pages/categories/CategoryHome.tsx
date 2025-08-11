import CategoryTable from "@/components/categories/CategoryTable";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import routeConstants from "@/constants/routes";
import type { RootState } from "@/lib/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoryHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Category Management"
        subTitle="Manage your list of categories"
        addButtonText="Create New Category"
        addButtonFunc={() => navigate(routeConstants.addCategories)}
      />
      <PageHeader
        tabList={selectedSubLinks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryTable searchTerm={searchTerm} />
    </div>
  );
};

export default CategoryHome;
