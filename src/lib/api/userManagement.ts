import UserManagementService from "@/services/UserManagementService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllUsers = (params: IGetUserQueryParams) => {
  const { is_active, per_page, role, search, type } = params;
  return useQuery<IGetResponse<IUser>, ErrorType>({
    queryKey: ["users", is_active, per_page, role, search, type],
    queryFn: () => UserManagementService.getAllUsers(params),
    refetchOnWindowFocus: true,
  });
};

export const useAddCorporateUser = () => {
  return useMutation<ICorporateUser, ErrorType, FormData>({
    mutationFn: UserManagementService.addCorporateUser,
    onSuccess: () => {
      toast.success("Corporate User Added Successfully");
    },
  });
};
