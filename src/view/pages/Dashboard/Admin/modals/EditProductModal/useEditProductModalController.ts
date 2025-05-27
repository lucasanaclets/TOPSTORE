import { z } from "zod";
import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";
import {
  colorsEnum,
  guaranteeTimesEnum,
  modelsEnum,
  storagesEnum,
} from "../../../../../../app/config/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../../../../../../app/services/productsService";
import toast from "react-hot-toast";

const schema = z.object({
  model_name: modelsEnum,
  storage: storagesEnum,
  color: colorsEnum,
  battery_percentage: z
    .union([
      z
        .number()
        .min(0, { message: "A bateria não pode ser menor que 0%" })
        .max(100, { message: "A bateria não pode ser maior que 100%" }),
      z.nan(),
    ])
    .refine((value) => !isNaN(value), {
      message: "Digite um número válido entre 0 e 100",
    }),
  guarantee_time: guaranteeTimesEnum,
  use_marks: z.enum(["Sim", "Não"]),
  box_exists: z.enum(["Sim", "Não"]),
});

type FormData = z.infer<typeof schema>;

export function useEditProductModalController() {
  const { isEditProductModalOpen, closeEditProductModal, productBeingEdited } =
    useAdminDashboardContext();

  const {
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      model_name: productBeingEdited?.model_name,
      storage: productBeingEdited?.storage,
      color: productBeingEdited?.color,
      battery_percentage: productBeingEdited?.battery_percentage,
      guarantee_time: productBeingEdited?.guarantee_time,
      use_marks: productBeingEdited?.use_marks,
      box_exists: productBeingEdited?.box_exists,
    },
  });

  const { isLoading, mutateAsync } = useMutation(productsService.update);
  const queryClient = useQueryClient();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        id: productBeingEdited!.id,
      });

      closeEditProductModal();
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Produto editado com sucesso!");

      reset();
    } catch {
      toast.error("Erro ao salvar alterações");
    }
  });

  return {
    isEditProductModalOpen,
    closeEditProductModal,
    handleSubmit,
    errors,
    control,
    register,
    isLoading,
  };
}
