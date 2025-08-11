interface IAdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  username: string;
  phoneNumber: string;
  permission: string;
  lastLogin: string;
  status: "active" | "inactive";
  avatar: string;
}
interface ICorporateUser {
  id: string;
  role: string;
  user_name?: string;
  email: string;
  email_verified_at?: string | null;
  phone?: string;
  pic?: string;
  is_active?: boolean;
  fiat_wallet?: string;
  crypto_wallet?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
  deletion_scheduled_at?: string | null;
  profile?: ICorporateProfile;
}

interface ICorporateProfile {
  id: string;
  user_id: string;
  industry_id: string;
  kyc_doc: string;
  company_name: string;
  company_size?: string | null;
  company_address: string;
  company_description: string;
  tags?: string | null;
  website_url?: string | null;
  created_at: string;
  updated_at: string;
}

interface IIndividualUser {
  id: string;
  role: string;
  user_name: string;
  phone: string;
  pic: string | null;
  email: string;
  email_verified_at: string | null;
  is_active: boolean;
  fiat_wallet: string;
  crypto_wallet: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  deletion_scheduled_at: string | null;
  profile: UserProfile;
}

type GenericUser = Omit<IIndividualUser, "role" | "profile"> & {
  role: "admin" | "super_admin" | "individual" | "corporate";
  profile: UserProfile | null;
};

type UserProfile = {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  address: string | null;
  bio: string | null;
  type: "buyer";
  verification_level: string;
  created_at: string;
  updated_at: string;
};

interface UserLoginDetails {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: IAdminUser;
}

interface IGetUserQueryParams {
  role?: "super_admin" | "admin" | "individual" | "corporate";
  type?: "seller" | "buyer"; // only for individualProfile
  is_active?: boolean;
  search?: string;
  per_page?: number; // default 10, max 100
}

interface IGetResponse<T> {
  data: T[];
  pagination: IPaginationData;
}

type IUser = IAdminUser | ICorporateUser | IIndividualUser;

interface IAddCorporateUser {
  company_name: string;
  company_address: string;
  company_description: string;
  industry_id: string;
  phone: string;
  email: string;
  pic: string;
  kyc_doc;
}
