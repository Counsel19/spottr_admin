import CategoriesService from "@/services/CategoriesService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetCategories = (params: IGetCategoriesQueryParams) => {
  const {  search } = params;
  return useQuery<IGetResponse<ICategory>, ErrorType>({
    queryKey: ["category", search],
    queryFn: () => CategoriesService.getCategories(params),
    refetchOnWindowFocus: true,
  });
};
export const useGetSubcategories = (params: IGetCategoriesQueryParams) => {
  const {  search } = params;
  return useQuery<IGetResponse<ISubcategory>, ErrorType>({
    queryKey: ["subCategories", search],
    queryFn: () => CategoriesService.getSubcategories(params),
    refetchOnWindowFocus: true,
  });
};

export const useGetCategoryByID = (categoryId?: string) => {
  return useQuery<ICategory, ErrorType>({
    queryKey: ["category", categoryId],
    queryFn: () => CategoriesService.getCategoryById(categoryId),
    enabled: !!categoryId,
  });
};
export const useGetSubcategoryById = (subCategoryId?: string) => {
  return useQuery<ISubcategory, ErrorType>({
    queryKey: ["subCategories", subCategoryId],
    queryFn: () => CategoriesService.getCategoryById(subCategoryId),
    enabled: !!subCategoryId,
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

export const useEditCategory = () => {
  return useMutation<
    ICategory,
    ErrorType,
    {
      data: IAddCategoryPayload;
      categoryId: string;
    }
  >({
    mutationFn: CategoriesService.updateCategory,
    onSuccess: () => {
      toast.success("Category Updated Successfully");
    },
  });
};
export const useEditSubcategory = () => {
  return useMutation<
    ISubcategory,
    ErrorType,
    {
      data: IAddSubcategoryPayload;
      subCategoryId: string;
    }
  >({
    mutationFn: CategoriesService.updateSubcategory,
    onSuccess: () => {
      toast.success("Sub Category Updated Successfully");
    },
  });
};

export const useDeleteCategory = () => {
  return useMutation<ICategory, ErrorType, string>({
    mutationFn: CategoriesService.deleteCategory,
    onSuccess: () => {
      toast.success("Category deleted Successfully");
    },
  });
};
export const useDeleteSubCategory = () => {
  return useMutation<ICategory, ErrorType, string>({
    mutationFn: CategoriesService.deleteSubCategory,
    onSuccess: () => {
      toast.success("Category deleted Successfully");
    },
  });
};
