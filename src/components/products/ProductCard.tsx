import { Card, CardContent } from "../ui/card";
import type { IProduct } from "@/types/product";
import ProductItem from "./ProductItem";

interface ProductCardProp {
  item: IProduct;
}
const ProductCard = ({ item }: ProductCardProp) => {
  return (
    <Card className="w-full bg-white rounded-[0.3rem] shadow-xs">
      <CardContent className="space-y-4">
        <ProductItem item={item} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
