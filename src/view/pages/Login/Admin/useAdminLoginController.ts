import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SigninAdminParams } from "../../../../app/services/authService/admin/signin";
import { authAdminService } from "../../../../app/services/authService/admin";
import toast from "react-hot-toast";
import { useAuth } from "../../../../app/hooks/useAuth";

const schema = z.object({
  registration: z.string().nonempty("Matrícula é obrigatória"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve conter pelo menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useAdminLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninAdminParams) => {
      return authAdminService.signin(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { access_token: accessToken } = await mutateAsync(data);
      signin(accessToken, "admin");
    } catch {
      toast.error("Credenciais inválidas");
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
