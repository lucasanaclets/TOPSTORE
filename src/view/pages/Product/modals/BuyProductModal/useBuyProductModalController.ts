import { z } from "zod";
import { useProductContext } from "../../components/ProductContext/useProductContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { ordersService } from "../../../../../app/services/ordersService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  address: z.string().nonempty("Endereço é obrigatório"),
});

type FormData = z.infer<typeof schema>;

interface useByProductModalController {
  product_id: string;
}

export function useBuyProductModalController({
  product_id,
}: useByProductModalController) {
  const { isBuyProductModalOpen, closeBuyProductModal } = useProductContext();

  const {
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation(ordersService.create);

  const navigate = useNavigate();

  const handleSubmit = hookFormHandleSubmit(async ({ address }) => {
    try {
      await mutateAsync({ address, product_id });

      closeBuyProductModal();
      reset();
      navigate("/");
      toast.success(
        "Pedido realizado com sucesso, entraremos em contato por e-mail para mais informações",
        { className: "text-center gap-2", duration: 8000 }
      );
    } catch {
      toast.error("Error ao confirmar pedido");
    }
  });

  return {
    isBuyProductModalOpen,
    closeBuyProductModal,
    register,
    errors,
    isLoading,
    handleSubmit,
  };
}
