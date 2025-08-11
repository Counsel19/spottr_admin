import ProductCreationModal from "@/components/products/ProductCreationModal";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import routeConstants from "@/constants/routes";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const tabsList = [
  {
    name: "Products",
    path: routeConstants.allProducts,
  },
  {
    name: "Product Requests",
    path: routeConstants.productRequest,
  },
];

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleProductSubmit = () => {};
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Product Management"
        subTitle="Manage your list of Products"
        addButtonFunc={() => setIsModalOpen(true)}
        addButtonText="Create New Product"
      />
      <PageHeader
        setSearchTerm={setSearch}
        searchTerm={search}
        tabList={tabsList}
      />

      <Outlet />

      <ProductCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleProductSubmit}
      />
    </div>
  );
};

export default ProductLayout;
