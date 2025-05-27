import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductsFilters } from "../../../../../../app/services/productsService/getAll";
import { useProducts } from "../../../../../../app/hooks/useProducts";

interface useFiltersModalControllerProps {
  closeFiltersModal(): void;
}

export function useFiltersModalController({
  closeFiltersModal,
}: useFiltersModalControllerProps) {
  const [filters, setFilters] = useState<ProductsFilters>({});

  const { refetch } = useProducts(filters);

  const { handleSubmit, control, reset } = useForm();

  const onApllyFilters = handleSubmit((data) => {
    setFilters({
      model_name: data.model_name === "" ? null : data.model_name,
      color: data.color === "" ? null : data.color,
      storage: data.storage === "" ? null : data.storage,
    });
    closeFiltersModal();
  });

  const handleClearFilters = () => {
    if (Object.keys(filters).length > 0) {
      setFilters({});
    }
    reset({ model_name: null, storage: null, color: null });
    closeFiltersModal();
  };

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  return {
    onApllyFilters,
    control,
    handleClearFilters,
  };
}
