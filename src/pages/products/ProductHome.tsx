import ProductTable from "@/components/products/ProductTable";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import routeConstants from "@/constants/routes";
import type { RootState } from "@/lib/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Product Management"
        subTitle="Manage your list of products here"
        addButtonText="Create New Product"
        addButtonFunc={() => navigate(routeConstants.addProduct)}
      />
      <PageHeader
        tabList={selectedSubLinks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductTable searchTerm={searchTerm} />
    </div>
  );
};

export default ProductHome;
