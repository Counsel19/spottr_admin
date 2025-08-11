import type { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

export const useSession = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return {
    user: auth.user,
    token: auth.token,
    isAuthenticated: auth.isAuthenticated,
  };
};
