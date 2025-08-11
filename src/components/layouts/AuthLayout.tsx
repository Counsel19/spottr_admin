import { Navigate, Outlet } from "react-router-dom";
import WelcomeToSpottr from "../auth/WelcomeToSpottr";
import { useSession } from "@/hooks/useSession";
import routeConstants from "@/constants/routes";

const AuthLayout = () => {
  const { isAuthenticated } = useSession();

  if (isAuthenticated) return <Navigate to={routeConstants.dashboard} />;
  return (
    <div className="grid grid-cols-[1.5fr_1fr] h-screen ">
      <WelcomeToSpottr />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
