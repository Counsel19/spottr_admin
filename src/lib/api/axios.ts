// import routeConstants from "@/constants/routes";
import Axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosPrivate = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token =
      localStorage.getItem("token") ||
      "1|JbtD7Is0zLwOgPYNivkcPJSHQriXB51koyEECOsKf6540c71 ";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => errorHandler(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);
const errorHandler = (error: AxiosError) => {
  if (error.status === 408 && error.message.includes("timeout")) {
    toast.error(
      "Oops! Your request took too long, please retry your last action"
    );
  }

  switch (error.status) {
    case 401: {
      toast.error("Looks like your session has expired, please login again.");
      break;
    }
    case 403: {
      toast.error("Looks like you cannot perform this task .");
      break;
    }

    case 500: {
      toast.error(
        "We are unable to process your request, please contact admin."
      );
      break;
    }

    default:
      break;
  }
  console.log(error, "error");
  return Promise.reject(error); // 🔥 always reject explicitly
};
