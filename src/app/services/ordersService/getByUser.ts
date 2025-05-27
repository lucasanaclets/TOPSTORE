import { Order } from "../../entities/Order";
import { httpClient } from "../httpClient";

interface GetByUserParams {
  userId: string;
}

type GetByUserResponse = Array<Order>;

export async function getByUser({ userId }: GetByUserParams) {
  const { data } = await httpClient.get<GetByUserResponse>("orders", {
    params: { user_id: userId },
  });

  return data;
}
