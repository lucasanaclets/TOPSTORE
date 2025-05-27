import { httpClient } from "../httpClient";

interface UpdateProductParams {
  id: string;
  model_name: string;
  storage: string;
  color: string;
  battery_percentage: number;
  guarantee_time: string;
  use_marks: string;
  box_exists: string;
}

export async function update({ id, ...params }: UpdateProductParams) {
  const { data } = await httpClient.patch(`/products/${id}`, params);

  return data;
}
