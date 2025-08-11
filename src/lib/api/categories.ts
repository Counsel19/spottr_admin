import CategoriesService from "@/services/CategoriesService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetCategories = (params: IGetCategoriesQueryParams) => {
  const { per_page, search } = params;
  return useQuery<IGetResponse<ICategory>, ErrorType>({
    queryKey: ["category", per_page, search],
    queryFn: () => CategoriesService.getCategories(params),
    refetchOnWindowFocus: true,
  });
};
export const useGetSubcategories = (params: IGetCategoriesQueryParams) => {
  const { per_page, search } = params;
  return useQuery<IGetResponse<ISubcategory>, ErrorType>({
    queryKey: ["subCategories", per_page, search],
    queryFn: () => CategoriesService.getSubcategories(params),
    refetchOnWindowFocus: true,
  });
};

export const useAddCategory = () => {
  return useMutation<ICategory, ErrorType, IAddCategoryPayload>({
    mutationFn: CategoriesService.addCategory,
    onSuccess: () => {
      toast.success("Category Added Successfully");
    },
  });
};
export const useAddSubcategory = () => {
  return useMutation<ISubcategory, ErrorType, IAddSubcategoryPayload>({
    mutationFn: CategoriesService.addSubcategory,
    onSuccess: () => {
      toast.success("Sub Category Added Successfully");
    },
  });
};
