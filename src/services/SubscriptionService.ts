//v1/users/all

import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class SubcriptionService {
  static async getSubcribers(params: IGetSubscribersQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.search) query.append("search", params.search);
        if (params.is_active) query.append("is_active", params.is_active);
        if (params.user_id) query.append("user_id", params.user_id);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(`/subscriptions?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async getSubcriptionPlan(params: IGetQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.search) query.append("search", params.search);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(
        `/subscription-plans?${query.toString()}`
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async getSubcriptionPlanById(planId?: string) {
    try {
      const res = await axiosPrivate.get(`/subscription-plans/${planId}`);
      return res.data.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async addSubscriptionPlan(paylaod: FormData) {
    try {
      const res = await axiosPrivate.post(`/subscription-plans`, paylaod, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async updateSubscriptionPlanImage(
    payload: IUpdateSubscriptionPlanImage
  ) {
    try {
      const res = await axiosPrivate.post(
        `/subscription-plans/${payload.id}/upload-image`,
        payload.data,
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
  static async updateSubscriptionPlanDetails(paylaod: IUpdateSubscriptionPlan) {
    try {
      const res = await axiosPrivate.post(
        `/subscription-plans/${paylaod.id}`,
        paylaod
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async toggleSubscriptionPlanStatus(paylaod: IUpdateSubscriptionPlan) {
    try {
      const res = await axiosPrivate.patch(
        `/subscription-plans/${paylaod.id}/toggle`
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async addFeatureToSubscriptionPlan(
    paylaod: IAddSubscriptionPlanFeature
  ) {
    try {
      const res = await axiosPrivate.post(
        `/subscription-plans/${paylaod.id}/add-feature`,
        paylaod
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async removeFeatureToSubscriptionPlan(
    paylaod: IRemoveSubscriptionPlanFeature
  ) {
    try {
      const res = await axiosPrivate.delete(
        `/subscription-plans/${paylaod.id}/remove-feature/${paylaod.featureId}`
      );
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
  static async deleteSubscriptionPlan(paylaod: string) {
    try {
      const res = await axiosPrivate.delete(`/subscription-plans/${paylaod}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default SubcriptionService;
