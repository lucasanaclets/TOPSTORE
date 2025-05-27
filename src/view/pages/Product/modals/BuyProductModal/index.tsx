import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useBuyProductModalController } from "./useBuyProductModalController";

interface BuyProductModalProps {
  product_id: string | undefined;
  product_name: string | undefined;
  product_value: number;
}

export function BuyProductModal({
  product_id,
  product_name,
  product_value,
}: BuyProductModalProps) {
  const {
    isBuyProductModalOpen,
    closeBuyProductModal,
    register,
    handleSubmit,
    errors,
    isLoading,
  } = useBuyProductModalController({
    product_id: product_id!,
  });

  return (
    <Modal
      open={isBuyProductModalOpen}
      onClose={closeBuyProductModal}
      title="Confirmar Pedido"
    >
      <div>
        <div className="mb-5 flex items-center justify-between w-full text-lg">
          <span className="tracking-[-1px] w-1/2 ">Apple {product_name}:</span>
          <strong className=" w-1/2 text-end">
            {formatCurrency(product_value)}
          </strong>
        </div>

        <h1 className="mb-4">
          Para confirmar o seu pedido, nos informe o endereço de entrega no
          formato recomendado.
        </h1>

        <small className="opacity-70 text-gray-700">
          Ex: Rua São Domingos, 15, Centro, Recife, PE, 58119-000
        </small>

        <form onSubmit={handleSubmit} className="mt-2">
          <Input
            {...register("address")}
            placeholder="Endereço"
            className="text-sm"
            error={errors.address?.message}
          />
          <Button type="submit" className="w-full mt-4" isLoading={isLoading}>
            Confirmar
          </Button>
        </form>
      </div>
    </Modal>
  );
}
