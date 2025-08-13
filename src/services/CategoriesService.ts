//v1/users/all

import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class CategoriesService {
  static async getCategories(params: IGetCategoriesQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.search) query.append("search", params.search);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(`/categories?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async getCategoryById(categoryId?: string) {
    try {
      const res = await axiosPrivate.get(`/categories/${categoryId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async getSubcategories(params: IGetCategoriesQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.search) query.append("search", params.search);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(`/sub_categories?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async getSubcategoryById(subCategoryId?: string) {
    try {
      const res = await axiosPrivate.get(`/sub_categories/${subCategoryId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async addCategory(paylaod: IAddCategoryPayload) {
    try {
      const res = await axiosPrivate.post(`/categories`, paylaod);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async addSubcategory(paylaod: IAddSubcategoryPayload) {
    try {
      const res = await axiosPrivate.post(`/sub_categories`, paylaod);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async updateCategory(paylaod: {
    data: IAddCategoryPayload;
    categoryId: string;
  }) {
    try {
      const res = await axiosPrivate.put(
        `/categories/${paylaod.categoryId}`,
        paylaod.data
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async updateSubcategory(paylaod: {
    data: IAddSubcategoryPayload;
    subCategoryId: string;
  }) {
    try {
      const res = await axiosPrivate.put(
        `/sub_categories/${paylaod.subCategoryId}`,
        paylaod.data
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async deleteCategory(categoryId: string) {
    try {
      const res = await axiosPrivate.delete(`/categories/${categoryId}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async deleteSubCategory(categoryId: string) {
    try {
      const res = await axiosPrivate.delete(`/sub_categories/${categoryId}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default CategoriesService;
