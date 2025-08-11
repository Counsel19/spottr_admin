import ProductTable from "@/components/products/ProductTable";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import type { RootState } from "@/lib/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductRequestHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Product Request Management"
        subTitle="Manage your list of products request here"
      />
      <PageHeader
        tabList={selectedSubLinks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductTable searchTerm={searchTerm} isProductRequest />
    </div>
  );
};

export default ProductRequestHome;
