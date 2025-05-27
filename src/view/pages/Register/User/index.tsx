import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useUserRegistersController } from "./useUserRegisterController";

export function UserRegister() {
  const { handleSubmit, register, errors, isLoading } =
    useUserRegistersController();

  return (
    <>
      <header>
        <h1 className="text-[50px] font-bold mb-[50px] text-center lg:hidden">
          TopStore
        </h1>
        <h1 className="font-bold text-2xl text-gray-800">Olá!</h1>
        <p className="text-lg">Crie sua conta para começar.</p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>

      <div className="w-full max-w-[307px] text-sm flex gap-1 mt-2 justify-center lg:hidden">
        Já possui uma conta?
        <Link to={"/login"} className="text-blue-150">
          Fazer login!
        </Link>
      </div>
    </>
  );
}
