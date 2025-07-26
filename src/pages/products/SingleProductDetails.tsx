import DeleteProductNoticeModal from "@/components/products/DeleteProductNoticeModal";
import ProductImgGalary from "@/components/products/ProductImgGalary";
import ProductInfo from "@/components/products/ProductInfo";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { buttonVariants } from "@/components/ui/button";
import routeConstants from "@/constants/routes";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const selectedProduct: IProductDetails = {
  id: "81ad5596-b424-4973-aaee-048720456f02",
  brand_id: "4fc45af0-e33a-4916-9fce-6b11c28cd7b9",
  corporate_profile: {
    id: "216aaa02-ed55-45cb-995d-22c0f2a3b5bc",
    user_id: "578840f0-d1ce-45d7-aadb-4ec9d86376d7",
    industry_id: "7f578317-b6eb-4edc-a217-d3b376990a03",
    kyc_doc:
      "http://127.0.0.1:8000/storage/kyc_documents/7ISxd7Vc0Hjzv1fh3eCjCLGv5Lwr6IUQiiOcSc0S.pdf",
    company_name: "Bernard",
    company_size: null,
    company_address: "17 ayobo  lagos",
    company_description: "A test dcji ovsdovni idsdionsdn ndvson",
    tags: null,
    website_url: null,
    created_at: "2025-06-21T11:53:51.000000Z",
    updated_at: "2025-06-21T11:53:51.000000Z",
  },
  corporate_profile_id: "8071c86c-9e2c-42bf-9e5f-8ea6b98cb34f",
  category_id: "a5a6540f-34f1-4ba1-9518-84cba344fc29",
  sub_category_id: "9ffd82a1-8dd6-4972-b548-d1c06727cdfa",
  name: "CIGARRETTE",
  created_by_admin: true,
  description: "sharp sharp",
  weight: "5g",
  dimension: "45 x 56",
  additional_specification: "acidf kocdnondf kskodkos",
  attribute: ["red", "yellowish"],
  variants: ["75cl", "glass"],
  tags: "jones,man,power",
  is_available: true,
  price: "500.00",
  product_code: "6249478764848",
  product_image_one: "/images/house_deco.jpg",
  product_image_two: "/images/house_deco.jpg",
  product_image_three: "/images/house_deco.jpg",
  product_image_four: "/images/house_deco.jpg",
  created_at: "2025-07-09T01:43:01.000000Z",
  updated_at: "2025-07-09T01:43:01.000000Z",
  category: {
    id: "a5a6540f-34f1-4ba1-9518-84cba344fc29",
    name: "Fire arms",
    created_at: "2025-06-21T14:32:30.000000Z",
    updated_at: "2025-06-21T14:32:30.000000Z",
  },
  subcategory: {
    id: "9ffd82a1-8dd6-4972-b548-d1c06727cdfa",
    category_id: "a5a6540f-34f1-4ba1-9518-84cba344fc29",
    name: "bikes",
    created_at: "2025-06-21T14:40:14.000000Z",
    updated_at: "2025-06-21T14:40:14.000000Z",
  },
  brand: {
    id: "4fc45af0-e33a-4916-9fce-6b11c28cd7b9",
    name: "Fire Ball",
    created_by_admin: false,
    image:
      "http://127.0.0.1:8000/storage/brand_images/SO2cS5OGHQd0kD03yADH4lNkyPkTwvxNcf4snL4U.jpg",
    category_id: "a5a6540f-34f1-4ba1-9518-84cba344fc29",
    description: "A very very nice car",
    created_at: "2025-06-21T15:00:20.000000Z",
    updated_at: "2025-06-21T15:11:55.000000Z",
    corporate_profile_id: null,
  },
};

const SingleProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productId } = useParams();

  const handleProductDelete = () => {};

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Product Details"
        subTitle="View Product details here"
        customAddActionButton={
          <Link
            to={`${routeConstants.allProducts}/${productId}/update`}
            className={cn(
              buttonVariants({
                className: "  font-medium rounded-[3rem]",
                variant: "outline",
              })
            )}
          >
            <Pencil className="size-6" />
            Update Product
          </Link>
        }
        removeButtonFunc={() => setIsModalOpen(true)}
        removeButtonText="Delete Product"
      />

      <div className="w-frame grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
        <React.Fragment>
          <ProductImgGalary
            images={[
              selectedProduct?.product_image_one ?? "",
              selectedProduct?.product_image_two ?? "",
              selectedProduct?.product_image_three ?? "",
              selectedProduct?.product_image_four ?? "",
            ]}
          />
        </React.Fragment>
        <div className="w-full">
          <ProductInfo selectedProduct={selectedProduct} />
        </div>
      </div>

      <DeleteProductNoticeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleProductDelete}
      />
    </div>
  );
};

export default SingleProductDetails;
