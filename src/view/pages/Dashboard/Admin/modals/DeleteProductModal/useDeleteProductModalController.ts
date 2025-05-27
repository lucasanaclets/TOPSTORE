import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";
import { productsService } from "../../../../../../app/services/productsService";
import toast from "react-hot-toast";

export function useDeleteProductModalController() {
  const {
    isDeleteProductModalOpen,
    closeDeleteProductModal,
    productBeingDeleted,
  } = useAdminDashboardContext();

  const { isLoading, mutateAsync } = useMutation(productsService.remove);
  const queryClient = useQueryClient();

  async function handleDeleteProduct() {
    try {
      await mutateAsync(productBeingDeleted!.id);

      closeDeleteProductModal();
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Produto removido com sucesso");
    } catch {
      toast.error("Erro ao remover produto do estoque");
    }
  }

  return {
    isDeleteProductModalOpen,
    closeDeleteProductModal,
    isLoading,
    handleDeleteProduct,
  };
}
