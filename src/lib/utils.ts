import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusBadgeColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "inactive":
      return "bg-red-100 text-red-700 hover:bg-red-200";
    case "active":
      return "bg-green-100 text-green-700 hover:bg-green-200";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  }
};

export const getRoleBadgeColor = (role: string) => {
  switch (role.toLowerCase()) {
    case "administrator":
      return "bg-red-100 text-red-700 hover:bg-red-200";
    case "admin":
      return "bg-purple-100 text-purple-700 hover:bg-purple-200";
    case "auditor":
      return "bg-blue-100 text-blue-700 hover:bg-blue-200";
    case "marketplace manager":
      return "bg-green-100 text-green-700 hover:bg-green-200";
    case "content manager":
      return "bg-orange-100 text-orange-700 hover:bg-orange-200";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  }
};
export const getKYCLevelBadgeColor = (role: string) => {
  switch (role.toLowerCase()) {
    case "0":
      return {
        styleClasses: "bg-red-100 text-red-700 hover:bg-red-200",
        name: "Unverified",
      };
    case "1":
      return {
        styleClasses: "bg-purple-100 text-purple-700 hover:bg-purple-200",
        name: "Pennding",
      };
    case "3":
      return {
        styleClasses: "bg-blue-100 text-blue-700 hover:bg-blue-200",
        name: "Verified",
      };

    case "4":
      return {
        styleClasses: "bg-green-100 text-green-700 hover:bg-green-200",
        name: "Completed",
      };

    default:
      return {
        styleClasses: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        name: "N/A",
      };
  }
};

export const formatToNaira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

export function extractAxiosErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      (error.response?.data as ErrorType)?.message ||
      error.response?.statusText ||
      error.message ||
      "An unknown Axios error occurred"
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unknown error occurred";
}
