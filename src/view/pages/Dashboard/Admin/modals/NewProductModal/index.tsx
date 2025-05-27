import { Controller } from "react-hook-form";
import {
  COLOR_OPTIONS,
  EXISTS_BOX_OPTIONS,
  GUARANTEE_TIME_OPTIONS,
  MODELS_OPTIONS,
  STORAGE_OPTIONS,
  USE_MARKS_OPTIONS,
} from "../../../../../../app/config/constants";
import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { useNewProductModalController } from "./useNewProductModalController";
import { Input } from "../../../../../components/Input";

export function NewProductModal() {
  const {
    isNewProductModalOpen,
    closeNewProductModal,
    handleSubmit,
    errors,
    control,
    register,
    isLoading,
  } = useNewProductModalController();

  return (
    <Modal
      title="Novo Produto"
      open={isNewProductModalOpen}
      onClose={closeNewProductModal}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 -mt-6">
          <Controller
            control={control}
            name="model_name"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Modelo"
                options={MODELS_OPTIONS}
                onChange={onChange}
                value={value}
                error={errors.model_name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="storage"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Armazenamento"
                options={STORAGE_OPTIONS}
                onChange={onChange}
                value={value}
                error={errors.storage?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Cor"
                options={COLOR_OPTIONS}
                onChange={onChange}
                value={value}
                error={errors.color?.message}
              />
            )}
          />

          <Input
            placeholder="Porcentagem de Bateria"
            type="number"
            error={errors.battery_percentage?.message}
            className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            {...register("battery_percentage", { valueAsNumber: true })}
          />

          <Controller
            control={control}
            name="guarantee_time"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tempo de Garantia"
                options={GUARANTEE_TIME_OPTIONS}
                onChange={onChange}
                value={value}
                error={errors.guarantee_time?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="use_marks"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Possui Marcas de Uso?"
                options={USE_MARKS_OPTIONS}
                onChange={onChange}
                value={value}
                error={errors.use_marks?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="box_exists"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Possui Caixa?"
                options={EXISTS_BOX_OPTIONS}
                onChange={onChange}
                value={value}
                error={errors.box_exists?.message}
              />
            )}
          />

          <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
            Adicionar ao Estoque
          </Button>
        </div>
      </form>
    </Modal>
  );
}
