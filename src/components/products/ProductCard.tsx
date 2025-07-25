import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import ProductItem from "./ProductItem";
import routeConstants from "@/constants/routes";
import ProductItemRequest from "./ProductItemRequest";

type ProductCardProp =
  | {
      productRequest: true;
      item: IProductRequest;
    }
  | {
      productRequest: false;
      item: IProductDetails;
    };

const ProductCard = ({ item, productRequest = false }: ProductCardProp) => {
  return (
    <Link to={`${routeConstants.allProducts}/${item.id}`}>
      <Card className="w-full bg-white rounded-[0.3rem] shadow-xs">
        <CardContent className="space-y-4">
          {productRequest ? (
            <ProductItemRequest item={item as IProductRequest} />
          ) : (
            <ProductItem item={item as IProductDetails} />
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
