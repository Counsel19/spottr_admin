import { Outlet } from "react-router-dom";
import WelcomeToSpottr from "../auth/WelcomeToSpottr";

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-[1.5fr_1fr] h-screen ">
      <WelcomeToSpottr />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
