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
import UpdateProduct from "./pages/products/UpdateProduct";
import ProductRequestHome from "./pages/products/ProductRequestHome";
import ProductLayout from "./components/products/ProductLayout";

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
          <Route path="buyer" element={<IndividualManager />} />
          <Route path="seller" element={<IndividualManager />} />
          <Route path="corporate" element={<CorporateManagement />} />
        </Route>
        <Route path="categories" element={<CategoryHome />} />
        <Route path="brands" element={<ComingSoon />} />
        <Route path="products">
          <Route element={<ProductLayout />}>
            <Route index element={<ProductHome />} />
            <Route path="request" element={<ProductRequestHome />} />
          </Route>
          <Route path=":productId" element={<SingleProductDetails />} />
          <Route path=":productId/update" element={<UpdateProduct />} />
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
