import { useProducts } from "../../../../app/hooks/useProducts";

export function useAdminDashboardController() {
  const {
    products,
    isLoading,
    filteredProducts,
    searchTerm,
    handleChangeSearchTerm,
  } = useProducts();

  return {
    products: products ?? [],
    isLoading,
    handleChangeSearchTerm,
    searchTerm,
    filteredProducts,
  };
}
