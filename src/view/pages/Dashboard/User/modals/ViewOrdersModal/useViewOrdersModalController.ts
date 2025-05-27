import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../../../../app/hooks/useAuth";
import { useUserDashboardContext } from "../../components/UserDashboardContext/useUserDashboardContext";
import { ordersService } from "../../../../../../app/services/ordersService";

export function useViewOrdersModalController() {
  const { closeViewOrdersModal, isViewOrdersModalOpen } =
    useUserDashboardContext();

  const { userId } = useAuth();

  const { isFetching, data } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => ordersService.getByUser({ userId: userId! }),
    enabled: !!userId && isViewOrdersModalOpen,
  });

  return {
    isViewOrdersModalOpen,
    closeViewOrdersModal,
    isLoading: isFetching,
    orders: data ?? [],
  };
}
