interface ICategory {
  id: string;
  name: string;
  is_active?: boolean;
  image?: string;
  created_at: string;
  updated_at: string;
}

interface ISubcategory {
  id: string;
  category_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}
