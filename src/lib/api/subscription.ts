import SubcriptionService from "@/services/SubscriptionService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllSubscribers = (params: IGetSubscribersQueryParams) => {
  const { is_active, per_page, subscription_plan_id, user_id, search } = params;
  return useQuery<IGetResponse<ISubscribers>, ErrorType>({
    queryKey: [
      "subcription",
      is_active,
      per_page,
      subscription_plan_id,
      search,
      user_id,
    ],
    queryFn: () => SubcriptionService.getSubcribers(params),
    refetchOnWindowFocus: true,
  });
};
export const useGetAllSubscriptionPlan = (params: IGetQueryParams) => {
  const { per_page, search } = params;
  return useQuery<IGetResponse<ISubscribersPlan>, ErrorType>({
    queryKey: ["subscription-plans", per_page, search],
    queryFn: () => SubcriptionService.getSubcriptionPlan(params),
    refetchOnWindowFocus: true,
  });
};

export const useAddSbscriptionPlan = () => {
  return useMutation<ISubscribersPlan, ErrorType, FormData>({
    mutationFn: SubcriptionService.addSubscriptionPlan,
    onSuccess: () => {
      toast.success("Product Added Successfully");
    },
  });
};

export const useUpdateSubscriptionPlanImage = () => {
  return useMutation<ISubscribersPlan, ErrorType, IUpdateSubscriptionPlanImage>(
    {
      mutationFn: SubcriptionService.updateSubscriptionPlanImage,
      onSuccess: () => {
        toast.success("Subscription Image Updated Successfully");
      },
    }
  );
};

export const useUpdateSubscriptionPlanDetails = () => {
  return useMutation<ISubscribersPlan, ErrorType, IUpdateSubscriptionPlan>({
    mutationFn: SubcriptionService.updateSubscriptionPlanDetails,
    onSuccess: () => {
      toast.success("Subscription Details Updated Successfully");
    },
  });
};

export const useToggleSubscriptionPlanStatus = () => {
  return useMutation<ISubscribersPlan, ErrorType, IUpdateSubscriptionPlan>({
    mutationFn: SubcriptionService.toggleSubscriptionPlanStatus,
    onSuccess: () => {
      toast.success("Subscription Status Updated Successfully");
    },
  });
};
export const useAddFeatureToSubscriptionPlan = () => {
  return useMutation<ISubscribersPlan, ErrorType, IAddSubscriptionPlanFeature>({
    mutationFn: SubcriptionService.addFeatureToSubscriptionPlan,
    onSuccess: () => {
      toast.success("Subscription Feature Added Successfully");
    },
  });
};
export const useRemoveFeatureToSubscriptionPlan = () => {
  return useMutation<
    ISubscribersPlan,
    ErrorType,
    IRemoveSubscriptionPlanFeature
  >({
    mutationFn: SubcriptionService.removeFeatureToSubscriptionPlan,
    onSuccess: () => {
      toast.success("Subscription Feature Removed Successfully");
    },
  });
};
export const useDeleteSubscriptionPlan = () => {
  return useMutation<ISubscribersPlan, ErrorType, string>({
    mutationFn: SubcriptionService.deleteSubscriptionPlan,
    onSuccess: () => {
      toast.success("Subscription Deleted Successfully");
    },
  });
};
