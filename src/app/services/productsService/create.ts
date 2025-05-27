import { httpClient } from "../httpClient";

interface CreateProductParams {
  model_name: string;
  storage: string;
  color: string;
  battery_percentage: number;
  guarantee_time: string;
  use_marks: string;
  box_exists: string;
}

export async function create(params: CreateProductParams) {
  const { data } = await httpClient.post("/products", params);

  return data;
}
