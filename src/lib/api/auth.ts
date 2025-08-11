import AuthService from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/auth/authSlice";
import { toast } from "sonner";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation<LoginResponse, ErrorType, UserLoginDetails>({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      toast.success("Login Successfull");
    },
  });
};
