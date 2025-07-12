import ProductGrid from "@/components/products/ProductGrid";
import PageHeader from "@/components/shared/PageHeader";
import routeConstants from "@/constants/routes";

const tabsList = [
  {
    name: "Products",
    path: routeConstants.allProducts,
  },
  {
    name: "Ads",
    path: routeConstants.allAdds,
  },
];

const ProductHome = () => {
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <PageHeader
        pageTitle="Products"
        createText=""
        deleteText=""
        tabList={tabsList}
      />

      <ProductGrid />
    </div>
  );
};

export default ProductHome;
