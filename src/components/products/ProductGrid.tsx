import type { IProduct } from "@/types/product";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {productData.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </div>
  );
};

const productData: IProduct[] = [
  {
    id: "1",
    title: "Wooden Wall Shelf",
    category: "Home Decor",
    company: "DecoCraft",
    location: "Lagos, Nigeria",
    price: "12000",
    image: "/images/house_deco.jpg",
  },
  {
    id: "2",
    title: "Vintage Table Lamp",
    category: "Lighting",
    company: "BrightGlow",
    location: "Abuja, Nigeria",
    price: "8500",
    image: "/images/house_deco.jpg",
  },
  {
    id: "3",
    title: "Framed Canvas Art",
    category: "Wall Art",
    company: "CanvasHouse",
    location: "Port Harcourt, Nigeria",
    price: "15500",
    image: "/images/house_deco.jpg",
  },
  {
    id: "4",
    title: "Decorative Throw Pillow",
    category: "Living Room",
    company: "CozyNest",
    location: "Ibadan, Nigeria",
    price: "3000",
    image: "/images/house_deco.jpg",
  },
  {
    id: "5",
    title: "Modern Floor Vase",
    category: "Accessories",
    company: "UrbanRoots",
    location: "Enugu, Nigeria",
    price: "9200",
    image: "/images/house_deco.jpg",
  },
  {
    id: "6",
    title: "Abstract Wall Clock",
    category: "Clocks",
    company: "TimeZone",
    location: "Kano, Nigeria",
    price: "4800",
    image: "/images/house_deco.jpg",
  },
  {
    id: "7",
    title: "Indoor Potted Plant",
    category: "Plants",
    company: "GreenLife",
    location: "Jos, Nigeria",
    price: "5600",
    image: "/images/house_deco.jpg",
  },
  {
    id: "8",
    title: "Minimalist Curtain Set",
    category: "Window Treatments",
    company: "CurtainCo",
    location: "Lagos, Nigeria",
    price: "7400",
    image: "/images/house_deco.jpg",
  },
  {
    id: "9",
    title: "Luxury Rug",
    category: "Flooring",
    company: "RugRepublic",
    location: "Benin City, Nigeria",
    price: "17000",
    image: "/images/house_deco.jpg",
  },
  {
    id: "10",
    title: "Tabletop Mirror",
    category: "Accessories",
    company: "MirrorMax",
    location: "Owerri, Nigeria",
    price: "6200",
    image: "/images/house_deco.jpg",
  },
  {
    id: "11",
    title: "Bookshelf Organizer",
    category: "Furniture",
    company: "SmartSpace",
    location: "Uyo, Nigeria",
    price: "11000",
    image: "/images/house_deco.jpg",
  },
  {
    id: "12",
    title: "Decorative Candle Set",
    category: "Candles",
    company: "AromaGlow",
    location: "Ilorin, Nigeria",
    price: "2800",
    image: "/images/house_deco.jpg",
  },
];

export default ProductGrid;
