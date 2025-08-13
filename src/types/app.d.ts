interface ErrorType {
  status?: string;
  message?: string; // the actual error message
}

interface IPaginationData {
  current_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  total: number;
  per_page: number;
  
}

interface IGetQueryParams {
  per_page: string;
  search: string;
}
interface FilterOption {
  label: string;
  value: string;
}

interface FilterField {
  key: string;
  label: string;
  options: FilterOption[];
}
