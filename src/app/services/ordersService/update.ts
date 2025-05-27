import { httpClient } from "../httpClient";

interface UpdateOrderParams {
  id: string;
  status: string;
}

export async function update({ id, ...params }: UpdateOrderParams) {
  const { data } = await httpClient.patch(`/orders/${id}`, params);

  return data;
}
