//v1/users/all

import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class UserManagementService {
  static async getAllUsers(params: IGetUserQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.role) query.append("role", params.role);
        if (params.type) query.append("type", params.type);
        if (params.is_active !== undefined)
          query.append("is_active", String(params.is_active));
        if (params.search) query.append("search", params.search);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(`/users/all?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async getCorporateRepDetails(corporateId?: string) {
    try {
      const res = await axiosPrivate.get(`/representatives/corporate/${corporateId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async getSingleUser(userId?: string) {
    try {
      const res = await axiosPrivate.get(`/users/${userId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async addCorporateUser(paylaod: FormData) {
    try {
      const res = await axiosPrivate.post(`/users/create/corporate`, paylaod, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async updateCorporateUser(paylaod: {
    data: FormData;
    userId: string;
  }) {
    try {
      const res = await axiosPrivate.post(
        `/users/update/corporate/${paylaod.userId}`,
        paylaod,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  // useBlockUnblockUser
  static async blockUnblockUser(payload: {
    userId: string;
    isActive: boolean;
  }) {
    try {
      const res = await axiosPrivate.patch(
        `/users/block-unblock/${payload.userId}`,
        {
          is_active: payload.isActive,
        }
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default UserManagementService;
