import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../../app/services/productsService";

export function useProductController(productId: string | undefined) {
  const { data, isFetching } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productsService.getById(productId!),
  });

  return {
    product: data ?? null,
    isLoading: isFetching,
  };
}
