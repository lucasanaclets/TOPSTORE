import { Product } from "../../../../app/entities/Product";
import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { Button } from "../../../components/Button";
import { useProductContext } from "./ProductContext/useProductContext";

interface ProductDetailsProps {
  data: Product;
}

export function ProductDetails({ data }: ProductDetailsProps) {
  const { openBuyProductModal } = useProductContext();

  return (
    <div className="w-full h-full p-4 sm:p-10 space-y-10 sm:space-y-16">
      <h1 className="text-xl sm:text-3xl font-bold text-gray-800 tracking-[-0.5px]">
        Apple {data.model_name}
      </h1>

      <div>
        <span className="text-gray-800 tracking-[-0.5px]">Especificações:</span>

        <div className="mt-5 space-y-2 text-gray-800 tracking-[-0.5px]">
          <div className="flex justify-between">
            <strong>Armazenamento: </strong>
            <span>{data.storage} GB</span>
          </div>
          <div className="flex justify-between">
            <strong>Cor: </strong>
            <span>{data.color}</span>
          </div>
          <div className="flex justify-between">
            <strong>Estado da bateria: </strong>
            <span>{data.battery_percentage}%</span>
          </div>
          <div className="flex justify-between">
            <strong>Garantia: </strong>
            <span>
              {data.guarantee_time === "0"
                ? "Sem garantia"
                : data.guarantee_time + " Meses"}
            </span>
          </div>
          <div className="flex justify-between">
            <strong>Marcas de uso: </strong>
            <span>{data.use_marks}</span>
          </div>
          <div className="flex justify-between">
            <strong>Presença de caixa: </strong>
            <span>{data.box_exists}</span>
          </div>
        </div>
      </div>

      <div className="mt-10 text-xl sm:text-3xl flex gap-1 sm:gap-4 text-gray-800 tracking-[-0.5px]">
        <strong>Por apenas:</strong>
        <span>{formatCurrency(data.value)}</span>
      </div>

      <Button className="h-14 text-lg w-full" onClick={openBuyProductModal}>
        Fazer pedido
      </Button>
    </div>
  );
}
