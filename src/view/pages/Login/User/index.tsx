import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useUserLoginController } from "./useUserLoginController";

export function UserLogin() {
  const { handleSubmit, register, errors, isLoading } =
    useUserLoginController();

  return (
    <>
      <header>
        <h1 className="text-[50px] font-bold mb-[50px] text-center lg:hidden">
          TopStore
        </h1>
        <h1 className="font-bold text-2xl text-gray-800">Olá!</h1>
        <p className="text-lg">Que bom te ver!</p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          Entrar
        </Button>
      </form>

      <div className="w-full max-w-[307px] text-sm flex gap-1 mt-2 justify-center lg:hidden">
        Não possui uma conta?
        <Link to={"/register"} className="text-blue-150">
          Criar agora!
        </Link>
      </div>

      <Link
        to={"/admin/login"}
        className="text-center text-gray-500 hover:text-gray-600 transition-colors outline-none w-full max-w-[307px]"
      >
        Entrar como administrador
      </Link>
    </>
  );
}
