import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import ProductItem from "../products/ProductItem";
import { productData } from "@/lib/data";

const TrendingSection: React.FC = () => {
  return (
    <Card className="w-full  bg-white shadow-none">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="font-bold text-primary text-[1.6rem]">
            Trending
          </CardTitle>
          <MoreHorizontal className="h-5 w-5 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {productData.slice(0, 3).map((item, index) => (
          <ProductItem key={index} item={item as IProductDetails} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingSection;
