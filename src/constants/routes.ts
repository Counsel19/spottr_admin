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
  editProduct:  (id?: string)  => `/dashboard/products/${id || ":id"}/edit`,

  //usermanagement
  addCorporateUser: "/dashboard/users/corporate/add",
  viewCorporateUser:  (id?: string)  => `/dashboard/users/corporate/${id || ":id"}`,
  editCorporateUser:  (id?: string)  => `/dashboard/users/corporate/${id || ":id"}/edit`,

  //industries
  industries: "/dashboard/industries",
  addIndustries: "/dashboard/industries/add",
  editIndustry: (id?: string) =>  `/dashboard/industries/${id || ":id"}/edit`,

  //brands
  brands: "/dashboard/brands",
  addBrands: "/dashboard/brands/add",
  editBrand: (id?: string) =>  `/dashboard/brands/${id || ":id"}/edit`,
  
  //subscription
  subscribers: "/dashboard/subscription/users",
  subscriptionPlan: "/dashboard/subscription/plans",
  addSubscriptionPlan: "/dashboard/subscription/plans/add",
  editSubscriptionPlan: (id?: string) => `/dashboard/subscription/plans/${id || ':id'}`,
  
  //categories
  categories: "/dashboard/categories",
  addCategories: "/dashboard/categories/add",
  editCategory: (id?: string) =>  `/dashboard/categories/${id || ":id"}/edit`,
  subCategories: "/dashboard/categories/sub",
  addSubcategories: "/dashboard/categories/sub/add",
  editSubCategory: (id?: string) =>  `/dashboard/categories/sub/${id || ":id"}/edit`,
};

export default routeConstants;
