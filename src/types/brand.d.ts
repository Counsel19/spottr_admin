interface IBrand {
  id: string;
  name: string;
  created_by_admin: boolean;
  image: string;
  category_id: string;
  description: string;
  created_at: string;
  updated_at: string;
  corporate_profile_id: string | null;
}