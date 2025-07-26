import { productData } from "@/lib/data";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  productRequest: boolean;
}
const ProductGrid = ({ productRequest }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {productData.map((product) =>
        productRequest == true ? (
          <ProductCard
            productRequest={productRequest}
            key={product.id}
            item={product as IProductRequest}
          />
        ) : (
          <ProductCard
            productRequest={productRequest}
            key={product.id}
            item={product as IProductDetails}
          />
        )
      )}
    </div>
  );
};

export default ProductGrid;
