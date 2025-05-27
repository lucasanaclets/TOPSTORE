import { LazyLoadImage } from "react-lazy-load-image-component";
import { Order } from "../../../../../../../app/entities/Order";
import { formatCurrency } from "../../../../../../../app/utils/formatCurrency";
import { formatDate } from "../../../../../../../app/utils/formatDate";
import { StatusMenu } from "./StatusMenu";
import { useOrderCardAdminController } from "./useOrderCardAdminController";

interface AdminOrderCardProps {
  order: Order;
}

export function OrderCardAdmin({ order }: AdminOrderCardProps) {
  const { selectedStatus, handleChangeStatus, isLoading } =
    useOrderCardAdminController({
      currentStatus: order.status,
      orderId: order.id,
    });

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4 border-b-[2px] border-gray-300">
      <StatusMenu
        status={order.status}
        isLoading={isLoading}
        selectedStatus={selectedStatus}
        onChangeStatus={handleChangeStatus}
      />

      <div className="flex justify-between sm:justify-around items-center w-[96%]">
        <LazyLoadImage
          src={`/products/${order.product.product_model.image_name}`}
          className="w-[60px]"
        />

        <div className="flex flex-col text-start">
          <span>
            <strong>Apple</strong> {order.product.model_name}
          </span>
          <span>
            <strong>Valor: </strong> {formatCurrency(order.product.value)}
          </span>
          <span>
            <strong>Feito em:</strong> {formatDate(new Date(order.created_at))}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="flex flex-col sm:flex-row gap-1 sm:gap-2">
          <strong>Quem comprou?</strong> {order.user.name}
        </span>
        <span className="flex flex-col sm:flex-row gap-1 sm:gap-2">
          <strong>Email para contato: </strong> {order.user.email}
        </span>
        <span className="flex flex-col gap-1">
          <strong>Entregar em :</strong> {order.address}
        </span>
      </div>
    </div>
  );
}
