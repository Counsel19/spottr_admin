import IndustriesService from "@/services/IndustriesService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetIndustries = (params: IGetIndustriesQueryParams) => {
  const { per_page, search } = params;
  return useQuery<IGetResponse<IIndustry>, ErrorType>({
    queryKey: ["industries", per_page, search],
    queryFn: () => IndustriesService.getIndustries(params),
    refetchOnWindowFocus: true,
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
