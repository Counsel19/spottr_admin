const routeConstants = {
  login: "/",
  register: "/register",
  resetPassword: "/reset-password",
  forgetPassword: "/forget-password",
  enterOTP: "/enter-otp",
  dashboard: "/dashboard",

  // Products
  allProducts: "/dashboard/products",
  allAdds: "/dashboard/products",
  productRequest: "/dashboard/products/request",
  addProduct: "/dashboard/products/add",

  //usermanagement
  addCorporateUser: "/dashboard/users/corporate/add",

  //industries
  industries: "/dashboard/industries",
  addIndustries: "/dashboard/industries/add",

  //brands
  brands: "/dashboard/brands",
  addBrands: "/dashboard/brands/add",

  //subscription
  subscribers: "/dashboard/subscription/users",
  subscriptionPlan: "/dashboard/subscription/plans",
  addSubscriptionPlan: "/dashboard/subscription/plans/add",
  editSubscriptionPlan: (id?: string) => `/dashboard/subscription/plans/${id || ':id'}`,

  //categories
  categories: "/dashboard/categories",
  addCategories: "/dashboard/categories/add",
  subCategories: "/dashboard/categories/sub",
  addSubcategories: "/dashboard/categories/sub/add",
};

export default routeConstants;
