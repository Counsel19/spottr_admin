import SidebarItem from "./molecules/SidebarItem";

import { FaRegDotCircle, FaAd } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa6";
import { BiSolidTachometer, BiSolidBoltCircle } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib/redux/store";
import { useEffect } from "react";
import { selectSubLinks } from "@/lib/redux/slices/routingSlice";

import { FaIndustry } from "react-icons/fa6";
import routeConstants from "@/constants/routes";

const DashbaordSidebar = () => {
  const location = useLocation();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const subLinks = sidebarLinks.find(
      (item) => item.path == location.pathname
    )?.subLinks;
    dispatch(selectSubLinks(subLinks));
  }, []);

  return (
    <div className="shadow-[0px_2.59px_12.93px_0px_#00000012] space-y-4">
      <div className="h-[6rem] w-full grid place-items-center">
        <img
          src={`/icons/dashboard.svg`}
          className="h-[2.4rem] w-[2.4rem]"
          alt={"dashboard"}
        />
      </div>
      {sidebarLinks.map((item) => (
        <SidebarItem
          subLinks={item?.subLinks}
          path={item.path}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default DashbaordSidebar;

const sidebarLinks = [
  {
    name: "Dashboard",
    icon: <FaRegDotCircle className="size-8" />,
    path: "/dashboard",
  },
  {
    name: "Users",
    icon: <PiUsersBold className="size-8" />,
    path: "/dashboard/users/admins",
    subLinks: [
      {
        name: "Admin",
        path: "/dashboard/users/admins",
      },
      {
        name: "Buyer",
        path: "/dashboard/users/buyer",
      },
      {
        name: "Seller",
        path: "/dashboard/users/seller",
      },
      {
        name: "Coporate",
        path: "/dashboard/users/corporate",
      },
    ],
  },
  {
    name: "Industries",
    icon: <FaIndustry className="size-8" />,
    path: "/dashboard/industries",
  },
  {
    name: "Categories",
    icon: <BiCategory className="size-8" />,
    path: "/dashboard/categories",
    subLinks: [
      {
        name: "Category",
        path: routeConstants.categories,
      },
      {
        name: "Sub Category",
        path: routeConstants.subCategories,
      },
    ],
  },
  {
    name: "Brands",
    icon: <BiCategory className="size-8" />,
    path: "/dashboard/brands",
  },
  {
    name: "Products",
    icon: <BiCategory className="size-8" />,
    path: "/dashboard/products",
    subLinks: [
      {
        name: "Products",
        path: routeConstants.allProducts,
      },
      {
        name: "Product Request",
        path: routeConstants.productRequest,
      },
    ],
  },
  {
    name: "Subscription",
    icon: <FaRegPaperPlane className="size-8" />,
    path: routeConstants. subscribers,
    subLinks: [
      {
        name: "Subscribers",
        path: routeConstants.subscribers,
      },
      {
        name: "Subscription Plan",
        path: routeConstants.subscriptionPlan,
      },
    ],
  },
  {
    name: "Transactions",
    icon: <FaRegPaperPlane className="size-8" />,
    path: "/dashboard/transactions",
  },
  {
    name: "Analytics",
    icon: <BiSolidTachometer className="size-8" />,
    path: "/dashboard/analytics",
  },
  {
    name: "Tasks",
    icon: <BiSolidBoltCircle className="size-8" />,
    path: "/dashboard/task",
  },
  {
    name: "Ads Section",
    icon: <FaAd className="size-8" />,
    path: "/dashboard/ads",
  },
  {
    name: "Settings",
    icon: <IoMdSettings className="size-8" />,
    path: "/dashboard/settings",
  },
];
