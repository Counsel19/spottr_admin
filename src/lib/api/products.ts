import ProductService from "@/services/ProductService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllProducts = (params: IGetProductQueryParams) => {
  const { per_page, search } = params;
  return useQuery<IGetResponse<IProductDetails>, ErrorType>({
    queryKey: ["products", per_page, search],
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
export const useGetProductById = (productId?: string) => {
  return useQuery<IProductDetails, ErrorType>({
    queryKey: ["products", productId],
    queryFn: () => ProductService.getProductById(productId),
    refetchOnWindowFocus: true,
    enabled: !!productId,
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

export const useEditProduct = () => {
  return useMutation<
    IProductDetails,
    ErrorType,
    {
      data: FormData;
      productId: string;
    }
  >({
    mutationFn: ProductService.updateProduct,

    onSuccess: () => {
      toast.success("Product Updated Successfully");
    },
  });
};
export const useDeleteProduct = () => {
  return useMutation<IProductDetails, ErrorType, string>({
    mutationFn: ProductService.deleteProduct,

    onSuccess: () => {
      toast.success("Product Deleted Successfully");
    },
  });
};
