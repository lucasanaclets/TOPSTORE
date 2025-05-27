import { Product } from "../../entities/Product";
import { httpClient } from "../httpClient";

type ProductsResponse = Array<Product>;

export type ProductsFilters = {
  model_name?: string | null;
  color?: string | null;
  storage?: string | null;
};

export async function getAll(filters?: ProductsFilters) {
  const { data } = await httpClient.get<ProductsResponse>("/products", {
    params: filters,
  });

  return data;
}
