import { Link, Outlet, useLocation } from "react-router-dom";

export function AuthLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex w-full h-full">
      <div className="hidden bg-gradient-to-b from-[#007AFF] to-[#002B7F] h-full w-1/2 items-center lg:flex">
        <div className="text-white ml-[157px] -mt-8 flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-[40px]">TopStore</h1>
            {pathname === "/login" && (
              <p className="font-medium text-lg">Não possui uma conta ?</p>
            )}
            {pathname === "/register" && (
              <p className="font-medium text-lg">Já possui uma conta ?</p>
            )}
          </div>

          <Link
            className="bg-blue-150 rounded-[30px] outline-none text-sm text-center px-8 py-3 hover:bg-blue-150/80 transition-colors"
            to={pathname === "/login" ? "/register" : "/login"}
          >
            {pathname === "/login" && <span>Criar minha conta</span>}
            {pathname === "/register" && <span>Faça o login</span>}
            {pathname === "/admin/login" && <span>Entrar como usuário</span>}
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:w-1/2">
        <div className="w-full max-w-[370px] px-6 flex flex-col gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
