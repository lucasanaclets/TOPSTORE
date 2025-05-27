import { Product } from "../../entities/Product";
import { httpClient } from "../httpClient";

type ProductsResponse = Product;

export async function getById(productId: string) {
  const { data } = await httpClient.get<ProductsResponse>(
    `/products/${productId}`
  );

  return data;
}
