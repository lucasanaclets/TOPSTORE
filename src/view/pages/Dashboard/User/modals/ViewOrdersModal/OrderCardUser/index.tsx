import { LazyLoadImage } from "react-lazy-load-image-component";
import { cn } from "../../../../../../../app/utils/cn";
import { Order } from "../../../../../../../app/entities/Order";
import { formatCurrency } from "../../../../../../../app/utils/formatCurrency";
import { formatDate } from "../../../../../../../app/utils/formatDate";
import { useOrderCardUserController } from "./useOrderCardUserController";
import { Spinner } from "../../../../../../components/Spinner";

interface OrderCardUserProps {
  order: Order;
}

export function OrderCardUser({ order }: OrderCardUserProps) {
  const { handleDeleteOrder, isLoading } = useOrderCardUserController(order.id);

  return (
    <div className="flex flex-col justify-center items-center border-b-[2px] border-gray-300 py-4">
      <div className="flex justify-end mt-3 mr-2 w-[96%]">
        <span
          className={cn(
            "text-sm px-3 border border-yellow-600 text-yellow-600 rounded-full",
            order.status === "Aguardando Pagamento" &&
              "border-gray-600 text-gray-600",
            order.status === "Entrega em Andamento" &&
              "border-blue-600 text-blue-600",
            order.status === "Entrega Concluída" &&
              "border-green-600 text-green-600",
            order.status === "Prazo de Pagamento Expirado" &&
              "border-red-600 text-red-600"
          )}
        >
          {order.status}
        </span>
      </div>

      <div className="flex justify-around items-center mt-2 w-[96%]">
        <LazyLoadImage
          src={`/products/${order.product.product_model.image_name}`}
          className="w-[60px] "
        />

        <div className="flex flex-col text-end">
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

      {(order.status === "Em Análise" ||
        order.status === "Aguardando Pagamento") && (
        <button
          onClick={handleDeleteOrder}
          className="w-[92%] mt-2.5 border border-red-700 text-red-700 py-2 rounded-lg hover:bg-red-100/20 transition-colors flex justify-center"
        >
          {!isLoading && <span>Cancelar Pedido</span>}
          {isLoading && <Spinner className="fill-red-500 text-gray-100/20" />}
        </button>
      )}
    </div>
  );
}
