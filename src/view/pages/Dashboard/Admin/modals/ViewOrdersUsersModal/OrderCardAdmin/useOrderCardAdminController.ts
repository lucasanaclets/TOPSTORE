import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { ordersService } from "../../../../../../../app/services/ordersService";
import toast from "react-hot-toast";

interface useOrderCardAdminControllerProps {
  currentStatus: string;
  orderId: string;
}

export function useOrderCardAdminController({
  currentStatus,
  orderId,
}: useOrderCardAdminControllerProps) {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const { mutateAsync, isLoading } = useMutation(ordersService.update);

  const handleChangeStatus = async (status: string) => {
    try {
      if (status === selectedStatus) {
        return;
      }

      await mutateAsync({ id: orderId, status });
      setSelectedStatus(status);
      toast.success("Status do pedido alterado", { duration: 2000 });
    } catch {
      toast.error("Erro ao alterar status do pedido");
    }
  };

  return {
    selectedStatus,
    handleChangeStatus,
    isLoading,
  };
}
