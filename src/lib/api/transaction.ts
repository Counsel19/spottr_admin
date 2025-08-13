import TransactionService from "@/services/TransactionService";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactions = (params: IGetTrasactionsQueryParams) => {
  const { format, purpose, per_page, status, type, user_id } = params;
  return useQuery<IGetResponse<ITransaction>, ErrorType>({
    queryKey: ["industries", format, purpose, per_page, status, type, user_id],
    queryFn: () => TransactionService.getTransactions(params),
    refetchOnWindowFocus: true,
  });
};
