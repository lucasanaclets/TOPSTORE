import { Modal } from "../../../../../components/Modal";
import { Spinner } from "../../../../../components/Spinner";
import { useViewOrdersUsersModalController } from "./useViewOrdersUsersModalController";
import EmptyStateImage from "../../../../../../assets/empty-state.svg";
import { ScrollableList } from "../../../../../components/ScrollableList";
import { OrderCardAdmin } from "./OrderCardAdmin";

export function ViewOrdersUsersModal() {
  const { isViewOrdersModalOpen, closeViewOrdersModal, isLoading, orders } =
    useViewOrdersUsersModalController();

  const ordersQuantity = orders.length + 1;
  const hasOrders = orders.length > 0;

  return (
    <Modal
      title="Pedidos Realizados"
      open={isViewOrdersModalOpen}
      onClose={closeViewOrdersModal}
    >
      {isLoading && (
        <div className="flex justify-center items-center h-[350px]">
          <Spinner className="w-7 h-7" />
        </div>
      )}

      {!isLoading && !hasOrders && (
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src={EmptyStateImage} alt="Empty State" />
          <h1 className="text-center">Não há pedidos a serem visualizados</h1>
        </div>
      )}

      {!isLoading && hasOrders && (
        <ScrollableList ordersQuantity={ordersQuantity}>
          {orders.map((order) => (
            <OrderCardAdmin key={order.id} order={order} />
          ))}
        </ScrollableList>
      )}
    </Modal>
  );
}
