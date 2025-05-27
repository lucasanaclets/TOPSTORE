import { Order } from "../../entities/Order";
import { httpClient } from "../httpClient";

type OrdersResponse = Array<Order>;

export async function getAll() {
  const { data } = await httpClient.get<OrdersResponse>("/orders");

  return data;
}
