import { axiosPrivate } from "@/lib/api/axios";
import { extractAxiosErrorMessage } from "@/lib/utils";

class TransactionService {
  static async getTransactions(params: IGetTrasactionsQueryParams) {
    try {
      const query = new URLSearchParams();

      if (params) {
        if (params.type) query.append("type", params.type);
        if (params.format) query.append("format", params.format);
        if (params.purpose) query.append("purpose", params.purpose);
        if (params.status) query.append("status", params.status);
        if (params.user_id) query.append("user_id", params.user_id);
        if (params.per_page) query.append("per_page", params.per_page);
      }

      const res = await axiosPrivate.get(`/transactions?${query.toString()}`);
      return res.data;
    } catch (error) {
      throw new Error(extractAxiosErrorMessage(error));
    }
  }
}

export default TransactionService;
