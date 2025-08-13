interface ITransaction {
  id: string;
  user_id: string;
  type: string;
  format: string;
  purpose: string;
  amount: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: GenericUser;
}

interface IGetTrasactionsQueryParams {
  type?: string;
  format?: string;
  status?: string;
  purpose?: string;
  user_id?: string;
  per_page?: string;
}
