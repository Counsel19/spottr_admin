import IndustriesService from "@/services/IndustriesService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetIndustries = (params: IGetIndustriesQueryParams) => {
  const { search } = params;
  return useQuery<IGetResponse<IIndustry>, ErrorType>({
    queryKey: ["industries", search],
    queryFn: () => IndustriesService.getIndustries(params),
    refetchOnWindowFocus: true,
  });
};
export const useGetIndustryById = (industryId?: string) => {
  return useQuery<IIndustry, ErrorType>({
    queryKey: ["industries", industryId],
    queryFn: () => IndustriesService.getIndustryById(industryId),
    refetchOnWindowFocus: true,
    enabled: !!industryId
  });
};

export const useAddIndustry = () => {
  return useMutation<IIndustry, ErrorType, IAddIndustryPayload>({
    mutationFn: IndustriesService.addIndustry,
    onSuccess: () => {
      toast.success("Industry Added Successfully");
    },
  });
};
export const useEditIndustry = () => {
  return useMutation<
    IIndustry,
    ErrorType,
    {
      data: IAddIndustryPayload;
      industryId: string;
    }
  >({
    mutationFn: IndustriesService.editIndustry,
    onSuccess: () => {
      toast.success("Industry Updated Successfully");
    },
  });
};

export const useDeleteIndustry = () => {
  return useMutation<IIndustry, ErrorType, string>({
    mutationFn: IndustriesService.deleteIndustry,
    onSuccess: () => {
      toast.success("Industry deleted Successfully");
    },
  });
};
