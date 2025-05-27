import { Modal } from "../../../../../components/Modal";
import { useViewOrdersModalController } from "./useViewOrdersModalController";
import { OrderCardUser } from "./OrderCardUser/";
import { ScrollableList } from "../../../../../components/ScrollableList";
import { Spinner } from "../../../../../components/Spinner";
import EmptyStateImage from "../../../../../../assets/empty-state.svg";

export function ViewOrdersModal() {
  const { isViewOrdersModalOpen, closeViewOrdersModal, isLoading, orders } =
    useViewOrdersModalController();

  const ordersQuantity = orders.length;
  const hasOrders = orders.length > 0;

  return (
    <Modal
      title="Meus Pedidos"
      open={isViewOrdersModalOpen}
      onClose={closeViewOrdersModal}
    >
      <div className="h-[300px] flex justify-center items-center">
        {isLoading && (
          <div className="flex justify-center items-center">
            <Spinner className="w-7 h-7" />
          </div>
        )}

        {!isLoading && !hasOrders && (
          <div className="flex flex-col gap-4 items-center justify-center">
            <img src={EmptyStateImage} alt="Empty State" />
            <h1 className="text-center">
              Você ainda nao possui nenhum pedido.
            </h1>
          </div>
        )}

        {!isLoading && hasOrders && (
          <ScrollableList ordersQuantity={ordersQuantity}>
            {orders.map((order) => (
              <OrderCardUser key={order.id} order={order} />
            ))}
          </ScrollableList>
        )}
      </div>
    </Modal>
  );
}
