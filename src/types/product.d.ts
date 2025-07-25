interface IProduct {
  id: string;
  title: string;
  category: string;
  company: string;
  location: string;
  price: string;
  image: string;
}

interface IProductDetails {
  id: string;
  brand_id: string;
  corporate_profile_id: string;
  corporate_profile: ICorporateProfile;
  category_id: string;
  sub_category_id: string;
  name: string;
  created_by_admin: boolean;
  description: string;
  weight: string;
  dimension: string;
  additional_specification: string;
  attribute: string[];
  variants: string[];
  tags: string;
  is_available: boolean;
  price: string;
  product_code: string;
  product_image_one: string;
  product_image_two: string;
  product_image_three: string | null;
  product_image_four: string | null;
  created_at: string;
  updated_at: string;
  category: ICategory;
  subcategory: ISubcategory;
  brand: IBrand;
}

interface IProductForm {
  brand_id: string;
  corporate_profile_id: string;
  category_id: string;
  sub_category_id?: string;
  name: string;
  description: string;
  weight: string;
  dimension: string;
  additional_specification: string;
  attribute: string[];
  variants: string[];
  tags: string;
  is_available: boolean;
  price: string;
  product_code: string;
  product_image_one: string;
  product_image_two: string;
  product_image_three: string | null;
  product_image_four: string | null;
  created_at: string;
  updated_at: string;
}

interface IProductRequest {
  id: string;
  user_id: string;
  category_id: string;
  sub_category_id: string;
  name: string;
  description: string;
  weight: string;
  dimension: string;
  additional_specification: string;
  attribute: string[];
  variants: string[];
  tags: string;
  price: string;
  product_code: string;
  product_image_one: string;
  product_image_two: string;
  product_image_three: string | null;
  product_image_four: string | null;
  is_approved: boolean | null;
  admin_comment: string | null;
  created_at: string;
  updated_at: string;
  category: ICategory;
  subcategory: ISubcategory;
  brand: IBrand;
}
