//v1/users/all

import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class BrandsService {
  static async getBrands(params: IGetBrandsQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.search) query.append("search", params.search);
      }

      const res = await axiosPrivate.get(`/brands?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async getBrandById(brandId?: string) {
    try {
      const res = await axiosPrivate.get(`/brands/${brandId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async addBrand(paylaod: FormData) {
    try {
      const res = await axiosPrivate.post(`/brands`, paylaod, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  
  static async updateBrand(paylaod: {
    data: FormData,
    brandId: string
  }) {
    try {
      const res = await axiosPrivate.post(`/brands/${paylaod.brandId}`, paylaod.data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async deleteBrand(brandId: string) {
    try {
      const res = await axiosPrivate.delete(`/brands/${brandId}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default BrandsService;
