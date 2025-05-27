import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SignupUserParams } from "../../../../app/services/authService/user/signup";
import { authUserService } from "../../../../app/services/authService/user";
import toast from "react-hot-toast";
import { useAuth } from "../../../../app/hooks/useAuth";
import { AxiosError } from "axios";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve conter pelo menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useUserRegistersController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignupUserParams) => {
      return authUserService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { access_token: accessToken } = await mutateAsync(data);
      signin(accessToken, "user");
    } catch (error) {
      const axiosError = error as AxiosError<{ detail?: string }>;
      const message =
        axiosError.response?.data?.detail || "Erro ao processar a solicitação";
      toast.error(message);
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
