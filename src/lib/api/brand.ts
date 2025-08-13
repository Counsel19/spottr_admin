import BrandsService from "@/services/BrandService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetBrands = (params: IGetBrandsQueryParams) => {
  const { search } = params;
  return useQuery<IGetResponse<IBrand>, ErrorType>({
    queryKey: ["brands", search],
    queryFn: () => BrandsService.getBrands(params),
    refetchOnWindowFocus: true,
  });
};
export const useGetBrandById = (brandId?: string) => {
  return useQuery<IBrand, ErrorType>({
    queryKey: ["brands", brandId],
    queryFn: () => BrandsService.getBrandById(brandId),
    refetchOnWindowFocus: true,
    enabled: !!brandId,
  });
};

export const useAddBrand = () => {
  return useMutation<IBrand, ErrorType, FormData>({
    mutationFn: BrandsService.addBrand,

    onSuccess: () => {
      toast.success("Brand Added Successfully");
    },
  });
};

export const useEditBrand = () => {
  return useMutation<
    IBrand,
    ErrorType,
    {
      data: FormData;
      brandId: string;
    }
  >({
    mutationFn: BrandsService.updateBrand,

    onSuccess: () => {
      toast.success("Brand Updated Successfully");
    },
  });
};
export const useDeleteBrand = () => {
  return useMutation<IBrand, ErrorType, string>({
    mutationFn: BrandsService.deleteBrand,

    onSuccess: () => {
      toast.success("Brand Deleted Successfully");
    },
  });
};
