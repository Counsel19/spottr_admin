interface IIndustry {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

interface IGetIndustriesQueryParams {
  search?: string;
  per_page?: number;
}
interface IAddIndustryPayload {
  name: string;
}
