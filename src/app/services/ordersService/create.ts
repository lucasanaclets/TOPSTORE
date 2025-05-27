import { httpClient } from "../httpClient";

interface CreateOrderParams {
  address: string;
  product_id: string;
}

export async function create(params: CreateOrderParams) {
  const { data } = await httpClient.post("/orders", params);

  return data;
}
