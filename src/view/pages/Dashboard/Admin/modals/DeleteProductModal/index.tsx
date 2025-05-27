import { TrashIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { useDeleteProductModalController } from "./useDeleteProductModalController";
import { Button } from "../../../../../components/Button";

export function DeleteProductModal() {
  const {
    isDeleteProductModalOpen,
    closeDeleteProductModal,
    handleDeleteProduct,
    isLoading,
  } = useDeleteProductModalController();

  return (
    <Modal
      onClose={closeDeleteProductModal}
      open={isDeleteProductModalOpen}
      title="Remover Produto"
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-0 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-900" />
        </div>

        <p className="w-[180px] text-gray-800 font-bold tracking-[-0.5px]">
          Tem certeza que deseja remover esse produto do estoque?
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <Button
          className="w-full"
          variant="danger"
          onClick={handleDeleteProduct}
          isLoading={isLoading}
        >
          Sim, desejo remover
        </Button>
        <Button
          className="w-full"
          variant="ghost"
          onClick={closeDeleteProductModal}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
