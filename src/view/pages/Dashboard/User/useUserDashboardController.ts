import { useCallback, useState } from "react";
import { useProducts } from "../../../../app/hooks/useProducts";

export function useUserDashboardController() {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const {
    isLoading,
    searchTerm,
    handleChangeSearchTerm,
    products,
    filteredProducts,
  } = useProducts();

  const openFiltersModal = useCallback(() => {
    setIsFiltersModalOpen(true);
  }, []);

  const closeFiltersModal = useCallback(() => {
    setIsFiltersModalOpen(false);
  }, []);

  return {
    products: products ?? [],
    filteredProducts,
    isLoading,
    searchTerm,
    handleChangeSearchTerm,
    openFiltersModal,
    isFiltersModalOpen,
    closeFiltersModal,
  };
}
