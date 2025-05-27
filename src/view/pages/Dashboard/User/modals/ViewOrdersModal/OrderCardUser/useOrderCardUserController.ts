import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ordersService } from "../../../../../../../app/services/ordersService";
import toast from "react-hot-toast";
import { useAuth } from "../../../../../../../app/hooks/useAuth";

export function useOrderCardUserController(orderId: string) {
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: () => ordersService.remove(orderId),
  });

  const { userId } = useAuth();

  const queryClient = useQueryClient();

  const handleDeleteOrder = async () => {
    try {
      await mutateAsync();
      queryClient.invalidateQueries({ queryKey: ["orders", userId] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Pedido Cancelado com Sucesso", { duration: 3000 });
    } catch {
      toast.error("Falha ao Cancelar Pedido");
    }
  };

  return { handleDeleteOrder, isLoading };
}
