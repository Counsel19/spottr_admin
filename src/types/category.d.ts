interface ICategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

interface IGetCategoriesQueryParams {
  search?: string;
  per_page?: number;
}
interface IAddCategoryPayload {
  name: string;
}
interface IAddSubcategoryPayload {
  name: string;
  category_id: string;
}

interface ISubcategory {
  id: string;
  category_id: string;
  category: ICategory;
  name: string;
  created_at: string;
  updated_at: string;
}
