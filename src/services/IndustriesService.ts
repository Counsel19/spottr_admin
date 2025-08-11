//v1/users/all

import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class IndustriesService {
  static async getIndustries(params: IGetIndustriesQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.search) query.append("search", params.search);
        if (params.per_page)
          query.append("per_page", params.per_page.toString());
      }

      const res = await axiosPrivate.get(`/industries?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }

  static async addIndustry(paylaod: IAddIndustryPayload) {
    try {
      const res = await axiosPrivate.post(`/industries`, paylaod);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default IndustriesService;
