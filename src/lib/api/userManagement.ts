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

export const useUpdateCorporateUser = () => {
  return useMutation<
    ICorporateUser,
    ErrorType,
    {
      data: FormData;
      userId: string;
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
    ICorporateProfile,
    ErrorType,
    {
      isActive: boolean;
      userId: string;
    }
  >({
    mutationFn: UserManagementService.blockUnblockUser,
    onSuccess: () => {
      toast.success("Corporate User active status updated Successfully");
    },
  });
};

export const useGetSingleCorporateUser = (userId?: string) => {
  return useQuery<ICorporateUser, ErrorType>({
    queryKey: ["corporate-user", userId],
    queryFn: () => UserManagementService.getSingleUser(userId),
    enabled: !!userId,
  });
};

export const useGetSingleIndividualUser = (userId?: string) => {
  return useQuery<IIndividualUser, ErrorType>({
    queryKey: ["individual-user", userId],
    queryFn: () => UserManagementService.getSingleUser(userId),
    refetchOnWindowFocus: true,
    enabled: !!userId,
  });
};

export const useGetCorporateRepDetails = (corporateProfieId?: string) => {
  return useQuery<ICorporateRepDetails, ErrorType>({
    queryKey: ["coporateRepDetails", corporateProfieId],
    queryFn: () =>
      UserManagementService.getCorporateRepDetails(corporateProfieId),
    refetchOnWindowFocus: true,
    enabled: !!corporateProfieId,
  });
};
