import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import EnterOTP from "./pages/auth/EnterOTP";
import DashbaordLayout from "./components/layouts/DashbaordLayout";
import DashbaordHome from "./pages/DashbaordHome";
import AdminManagement from "./pages/usersManagement/AdminManagement";
import CategoryHome from "./pages/categories/CategoryHome";
import ComingSoon from "./pages/ComingSoon";
import ProductHome from "./pages/products/ProductHome";
import TransactionHome from "./pages/transactions/TransactionHome";
import CorporateManagement from "./pages/usersManagement/CorporateManagement";
import IndividualManager from "./pages/usersManagement/IndividualManager";
import SingleProductDetails from "./pages/products/SingleProductDetails";
import ProductRequestHome from "./pages/products/ProductRequestHome";
import { individualUserType } from "./constants/enums";
import AddCorporateUser from "./pages/usersManagement/AddCorporateUser";
import IndustriesHome from "./pages/industries/IndustriesHome";
import AddIndustries from "./pages/industries/AddIndustries";
import AddSubcategories from "./pages/categories/AddSubcategory";
import AddCategories from "./pages/categories/AddCategory";
import SubcategoryHome from "./pages/categories/SubcategoryHome";
import BrandHome from "./pages/brand/BrandHome";
import AddBrand from "./pages/brand/AddBrand";
import AddProduct from "./pages/products/AddProduct";
import SubscribedUserHome from "./pages/subscription/SubscribedUserHome";
import SubscriptionPlanHome from "./pages/subscription/SubscriptionPlanHome";
import AddSubscriptionPlan from "./pages/subscription/AddSubscriptionPlan";
import EditSubscriptionPlan from "./pages/subscription/EditSubscriptionPlan";
import ViewUser from "./pages/usersManagement/ViewUser";
import EditCorporateUser from "./pages/usersManagement/EditCorporateUser";
import EditIndustry from "./pages/industries/EditIndustry";
import EditCategory from "./pages/categories/EditCategory";
import EditSubCategory from "./pages/categories/EditSubCategory";
import EditBrand from "./pages/brand/EditBrand";
import EditProduct from "./pages/products/EditProduct";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="enter-otp" element={<EnterOTP />} />
      </Route>
      <Route path="dashboard" element={<DashbaordLayout />}>
        <Route index element={<DashbaordHome />} />
        <Route path="users">
          <Route path="admins" element={<AdminManagement />} />
          <Route
            path="buyer"
            element={<IndividualManager userType={individualUserType.buyer} />}
          />
          <Route
            path="seller"
            element={<IndividualManager userType={individualUserType.seller} />}
          />
          <Route path="corporate">
            <Route index element={<CorporateManagement />} />
            <Route path="add" element={<AddCorporateUser />} />
            <Route path=":userId" element={<ViewUser />} />
            <Route path=":userId/edit" element={<EditCorporateUser />} />
          </Route>
        </Route>
        <Route path="industries">
          <Route index element={<IndustriesHome />} />
          <Route path="update" element={<IndustriesHome />} />
          <Route path="add" element={<AddIndustries />} />
          <Route path=":industryId/edit" element={<EditIndustry />} />
        </Route>
        <Route path="categories">
          <Route index element={<CategoryHome />} />
          <Route path=":categoryId/edit" element={<EditCategory />} />
          <Route path="add" element={<AddCategories />} />
          <Route path="sub" element={<SubcategoryHome />} />
          <Route path="sub/add" element={<AddSubcategories />} />
          <Route path=":subCategoryId/edit" element={<EditSubCategory />} />
        </Route>
        <Route path="brands">
          <Route index element={<BrandHome />} />
          <Route path="add" element={<AddBrand />} />
          <Route path=":brandId/edit" element={<EditBrand />} />
        </Route>
        <Route path="products">
          <Route index element={<ProductHome />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="request" element={<ProductRequestHome />} />
          <Route path=":productId" element={<SingleProductDetails />} />
          <Route path=":productId/edit" element={<EditProduct />} />
        </Route>
        <Route path="subscription">
          <Route path="users" element={<SubscribedUserHome />} />
          <Route path="plans">
            <Route  index element={<SubscriptionPlanHome />} />
            <Route  path=":planId" element={<EditSubscriptionPlan />} />
            <Route path="add" element={<AddSubscriptionPlan />} />
          </Route>
        </Route>

        <Route path="transactions" element={<TransactionHome />} />
        <Route path="analytics" element={<ComingSoon />} />
        <Route path="task" element={<ComingSoon />} />
        <Route path="ads" element={<ComingSoon />} />
        <Route path="settings" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
