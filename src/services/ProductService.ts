//v1/products/all

import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class ProductService {
  static async getAllProducts(params: IGetProductQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.category) query.append("category", params.category);
        if (params.sub_category)
          query.append("sub_category", params.sub_category);
        if (params.is_available !== undefined)
          query.append("is_available", String(params.is_available));
        if (params.search) query.append("search", params.search);
        if (params.brand) query.append("brand", params.brand);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(`/products?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async getAllProductsRequest(params: IGetProductQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.category) query.append("category", params.category);
        if (params.sub_category)
          query.append("sub_category", params.sub_category);
        if (params.is_available !== undefined)
          query.append("is_available", String(params.is_available));
        if (params.search) query.append("search", params.search);
        if (params.brand) query.append("brand", params.brand);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(
        `/product-requests?${query.toString()}`
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async getProductById(productId?: string) {
    try {
      const res = await axiosPrivate.get(`/products/${productId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async addProduct(paylaod: FormData) {
    try {
      const res = await axiosPrivate.post(`/products`, paylaod, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  
  static async updateProduct(paylaod: {
    data: FormData,
    productId: string
  }) {
    try {
      const res = await axiosPrivate.post(`/products/update/${paylaod.productId}`, paylaod.data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async deleteProduct(productId: string) {
    try {
      const res = await axiosPrivate.delete(`/products/${productId}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default ProductService;
