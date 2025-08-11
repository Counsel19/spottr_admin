import ProductService from "@/services/ProductService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllProducts = (params: IGetUserQueryParams) => {
  const { is_active, per_page, role, search, type } = params;
  return useQuery<IGetResponse<IProductDetails>, ErrorType>({
    queryKey: ["products", is_active, per_page, role, search, type],
    queryFn: () => ProductService.getAllProducts(params),
    refetchOnWindowFocus: true,
  });
};
export const useGetAllProductsRequest = (params: IGetUserQueryParams) => {
  const { is_active, per_page, role, search, type } = params;
  return useQuery<IGetResponse<IProductDetails>, ErrorType>({
    queryKey: ["products-request", is_active, per_page, role, search, type],
    queryFn: () => ProductService.getAllProductsRequest(params),
    refetchOnWindowFocus: true,
  });
};

export const useAddProduct = () => {
  return useMutation<IProductDetails, ErrorType, FormData>({
    mutationFn: ProductService.addProduct,
    onSuccess: () => {
      toast.success("Product Added Successfully");
    },
  });
};
