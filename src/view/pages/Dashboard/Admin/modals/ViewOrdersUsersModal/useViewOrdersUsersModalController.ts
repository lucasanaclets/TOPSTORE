import { useQuery } from "@tanstack/react-query";
import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";
import { ordersService } from "../../../../../../app/services/ordersService";

export function useViewOrdersUsersModalController() {
  const { isViewOrdersModalOpen, closeViewOrdersModal } =
    useAdminDashboardContext();

  const { isFetching, data } = useQuery({
    queryKey: ["orders"],
    queryFn: ordersService.getAll,
    enabled: isViewOrdersModalOpen,
  });

  return {
    isViewOrdersModalOpen,
    closeViewOrdersModal,
    isLoading: isFetching,
    orders: data ?? [],
  };
}
