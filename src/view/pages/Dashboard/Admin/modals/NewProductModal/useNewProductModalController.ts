import { z } from "zod";
import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";
import {
  colorsEnum,
  guaranteeTimesEnum,
  modelsEnum,
  storagesEnum,
} from "../../../../../../app/config/enums";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../../../../../../app/services/productsService";
import toast from "react-hot-toast";

const schema = z.object({
  model_name: modelsEnum.optional().refine((val) => val !== undefined, {
    message: "O modelo do iPhone é obrigatório.",
  }),
  storage: storagesEnum.optional().refine((val) => val !== undefined, {
    message: "O armazenamento é obrigatório.",
  }),
  color: colorsEnum.optional().refine((val) => val !== undefined, {
    message: "A cor do iPhone é obrigatória.",
  }),
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
  guarantee_time: guaranteeTimesEnum
    .optional()
    .refine((val) => val !== undefined, {
      message: "O tempo de garantia é obrigatório.",
    }),
  use_marks: z.enum(["Sim", "Não"], {
    errorMap: () => ({ message: "Informe se há marcas de uso." }),
  }),
  box_exists: z.enum(["Sim", "Não"], {
    errorMap: () => ({
      message: "Informe se a caixa original está disponível.",
    }),
  }),
});

type FormData = z.infer<typeof schema>;

export function useNewProductModalController() {
  const { isNewProductModalOpen, closeNewProductModal } =
    useAdminDashboardContext();

  const {
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation(productsService.create);
  const queryClient = useQueryClient();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync(data);

      queryClient.invalidateQueries({ queryKey: ["products"] });

      toast.success("Produto adicionado com sucesso");
      closeNewProductModal();
      reset();
    } catch {
      toast.error("Erro ao adicionar produto ao estoque");
    }
  });

  return {
    isNewProductModalOpen,
    closeNewProductModal,
    handleSubmit,
    errors,
    control,
    register,
    isLoading,
  };
}
