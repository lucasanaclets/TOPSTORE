import { httpClient } from "../httpClient";

type SalesReportResponse = {
  orders: number;
  billing: number;
  best_selling_models: Array<string>;
  best_selling_colors: Array<string>;
};

export type SalesReportFilters = {
  month: number;
  year: number;
};

export async function getSalesReport(filters: SalesReportFilters) {
  const { data } = await httpClient.get<SalesReportResponse>(
    "/products/sales_statistics",
    {
      params: filters,
    }
  );

  return data;
}
