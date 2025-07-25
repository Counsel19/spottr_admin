import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import ProductItem from "../products/ProductItem";

const TrendingSection: React.FC = () => {
  const trendingItems: IProduct[] = [
    {
      id: "1",
      title: "10 Baskets of Tomatoes",
      category: "Food Services",
      company: "Coker & Sons Ltd.",
      location: "Lagos, Nigeria",
      price: "₦10,000.00",
      image: "/images/food_basket.jpg",
    },
    {
      id: "2",
      title: "10 Baskets of Tomatoes",
      category: "Food Services",
      company: "Coker & Sons Ltd.",
      location: "Lagos, Nigeria",
      price: "₦10,000.00",
      image: "/images/food_basket.jpg",
    },
    {
      id: "3",
      title: "10 Baskets of Tomatoes",
      category: "Food Services",
      company: "Coker & Sons Ltd.",
      location: "Lagos, Nigeria",
      price: "₦10,000.00",
      image: "/images/food_basket.jpg",
    },
  ];

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
        {trendingItems.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingSection;
