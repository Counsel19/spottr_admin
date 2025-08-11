interface IAddProductPayload {
  brand_id: string;
  name: string;
  category_id: string;
  sub_category_id: string;
  description: string;
  weight: string;
  dimension: string;
  additional_specification: string;
  attribute: string;
  variants: string;
  tags: string;
  is_available: number;
  price: number;
  product_code: string;
  product_image_one: string;
  product_image_two: string;
  product_image_three: string;
  product_image_four: string;
}

interface IGetProductQueryParams {
  category?: string;
  sub_category?: string;
  brand?: string;
  is_available?: boolean;
  search?: string;
  per_page?: number;
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
interface ISingleProductDetails {
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
  subcategory: Omit<ISubcategory, "category">;
  brand: Omit<IBrand, "products" | "category">;
}

interface IProductForm {
  brandId: string;
  categoryId: string;
  subCategoryId?: string;
  corporateProfileId: string;
  name: string;
  description: string;
  weight: string;
  dimension: string;
  additionalSpecification: string;
  attribute: string[];
  variants: string[];
  productCode: string;
  tags: string[];
  isAvailable: string;
  price: string;
  productImageOne: File | null;
  productImageTwo: File | null;
  productImageThree: File | null;
  productImageFour: File | null;
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
