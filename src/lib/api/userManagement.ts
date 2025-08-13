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

export const useGetSingleCorporateUser = (corporateUserId?: string) => {
  return useQuery<UserProfile, ErrorType>({
    queryKey: ["users", corporateUserId],
    queryFn: () =>
      UserManagementService.getSingleCorporateUser(corporateUserId),
    enabled: !!corporateUserId,
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
export const useUpdateCorporateUser = () => {
  return useMutation<
    ICorporateUser,
    ErrorType,
    {
      data: FormData;
      corporateId?: string;
    }
  >({
    mutationFn: UserManagementService.updateCorporateUser,
    onSuccess: () => {
      toast.success("Corporate User Updated Successfully");
    },
  });
};
export const useBlockUnblockUser = () => {
  return useMutation<
    ICorporateUser,
    ErrorType,
    { is_active: boolean; id: string }
  >({
    mutationFn: UserManagementService.blockUnblockUser,
    onSuccess: () => {
      toast.success("Corporate User Status Updated Successfully");
    },
  });
};
