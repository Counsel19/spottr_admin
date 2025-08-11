import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class AuthService {
  static async login(credentials: UserLoginDetails) {
    try {
      const res = await axiosPrivate.post(`/auth/admin/signin`, credentials);

      const { token, data } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));

      return { token, user: data };
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default AuthService;
