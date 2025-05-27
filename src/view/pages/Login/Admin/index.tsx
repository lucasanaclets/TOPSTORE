import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useAdminLoginController } from "./useAdminLoginController";

export function AdminLogin() {
  const { handleSubmit, register, errors, isLoading } =
    useAdminLoginController();

  return (
    <>
      <header>
        <h1 className="text-[50px] font-bold mb-[50px] text-center lg:hidden">
          TopStore
        </h1>
        <h1 className="font-bold text-2xl text-gray-800">Olá, Chefe!</h1>
        <p className="text-lg">Que bom te ver!</p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Matrícula"
          error={errors.registration?.message}
          {...register("registration")}
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

      <Link
        to={"/login"}
        className="text-center text-gray-500 hover:text-gray-600 transition-colors outline-none w-full max-w-[307px] lg:hidden"
      >
        Entrar como usuário
      </Link>
    </>
  );
}
