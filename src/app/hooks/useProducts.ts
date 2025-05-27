import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/productsService";
import { useCallback, useMemo, useState } from "react";
import { Product } from "../entities/Product";
import { ProductsFilters } from "../services/productsService/getAll";

export function useProducts(filters?: ProductsFilters) {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: products,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsService.getAll(filters),
  });

  const handleChangeSearchTerm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  const filteredProducts: Array<Product> = useMemo(() => {
    return (
      products?.filter((product) =>
        product.model_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) ?? []
    );
  }, [products, searchTerm]);

  return {
    products: products ?? [],
    isLoading: isFetching,
    searchTerm,
    handleChangeSearchTerm,
    filteredProducts,
    refetch,
  };
}
