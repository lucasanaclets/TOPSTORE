import { Controller } from "react-hook-form";
import {
  COLOR_OPTIONS,
  MODELS_OPTIONS,
  STORAGE_OPTIONS,
} from "../../../../../../app/config/constants";
import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { useFiltersModalController } from "./useFiltersModalController";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const { control, onApllyFilters, handleClearFilters } =
    useFiltersModalController({
      closeFiltersModal: onClose,
    });

  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      <form className="flex flex-col gap-3" onSubmit={onApllyFilters}>
        <Controller
          control={control}
          name="model_name"
          render={({ field: { onChange, value } }) => (
            <Select
              placeholder="Modelo"
              options={MODELS_OPTIONS}
              onChange={onChange}
              value={value ?? null}
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
              value={value ?? null}
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
              value={value ?? null}
            />
          )}
        />

        <div>
          <Button type="submit" className="w-full mt-3">
            Aplicar Filtros
          </Button>

          <Button
            type="button"
            className="w-full mt-1 py-2 bg-transparent hover:bg-transparent hover:text-gray-600 text-black"
            onClick={handleClearFilters}
          >
            Limpar Filtros
          </Button>
        </div>
      </form>
    </Modal>
  );
}
