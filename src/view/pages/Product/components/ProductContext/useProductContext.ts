import { useContext } from "react";
import { ProductContext } from ".";

export function useProductContext() {
  return useContext(ProductContext);
}
