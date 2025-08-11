import BrandsService from "@/services/BrandService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetBrands = (params: IGetBrandsQueryParams) => {
  const {  search,  } = params;
  return useQuery<IGetResponse<IBrand>, ErrorType>({
    queryKey: ["brands",  search],
    queryFn: () => BrandsService.getBrands(params),
    refetchOnWindowFocus: true,
  });
};

export const useAddBrand = () => {
  return useMutation<IBrand, ErrorType, FormData>({
    mutationFn: BrandsService.addBrand,

    onSuccess: () => {
      toast.success("Brands Added Successfully");
    },
  });
};
