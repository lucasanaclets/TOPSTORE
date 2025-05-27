import { DashboardHeader } from "../../../components/DashboardHeader";
import {
  AdminDashboardContext,
  AdminDashboardProvider,
} from "./components/AdminDashboardContext";
import { Fab } from "./components/Fab";
import { NewProductModal } from "./modals/NewProductModal";
import { ProductCardAdmin } from "./components/ProductCardAdmin";
import { EditProductModal } from "./modals/EditProductModal";
import { DeleteProductModal } from "./modals/DeleteProductModal";
import { useAdminDashboardController } from "./useAdminDashboardController";
import EmptyStateImage from "../../../../assets/empty-state.svg";
import magnifierQuestion from "../../../../assets/magnifier-question.svg";
import { Spinner } from "../../../components/Spinner";
import { ViewOrdersUsersModal } from "./modals/ViewOrdersUsersModal";
import { SalesReportModal } from "./modals/SalesReportModal";

export function AdminDashboard() {
  const {
    products,
    isLoading,
    filteredProducts,
    searchTerm,
    handleChangeSearchTerm,
  } = useAdminDashboardController();

  const hasProducts = products.length > 0;
  const isSearchEmpty = hasProducts && filteredProducts.length < 1;

  return (
    <AdminDashboardProvider>
      <AdminDashboardContext.Consumer>
        {({ productBeingEdited }) => (
          <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col items-center">
            <DashboardHeader />

            <main className="w-full max-w-[630px] py-4 flex-1 flex flex-col gap-4 items-center max-h-full">
              <header className=" mt-[70px] w-full flex flex-col gap-2 pb-4">
                <strong className="text-lg tracking-[-0.5px]">
                  Encontre Produtos no Estoque
                </strong>
                <input
                  value={searchTerm}
                  onChange={handleChangeSearchTerm}
                  type="text"
                  placeholder="Pesquise aqui..."
                  className="px-4 py-2 tracking-[-0.5px] rounded-lg w-full max-w-[630px] outline-none"
                />
              </header>

              {isLoading && (
                <div className="flex items-center justify-center flex-col mt-[130px]">
                  <Spinner className="w-7 h-7" />
                </div>
              )}

              {!hasProducts && !isLoading && (
                <div className="flex items-center justify-center flex-col mt-10">
                  <img src={EmptyStateImage} alt="Empty State" />
                  <p className="text-gray-700 text-center">
                    Não encontramos nenhum produto
                  </p>
                </div>
              )}

              {hasProducts && !isLoading && (
                <div className="w-full pb-8 flex justify-center">
                  <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5">
                    {filteredProducts.map((product) => (
                      <ProductCardAdmin key={product.id} data={product} />
                    ))}
                  </div>
                </div>
              )}

              {isSearchEmpty && (
                <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8">
                  <img src={magnifierQuestion} alt="Magnifier Question" />

                  <span className="text-center">
                    Nenhum resultado foi encontrado para{" "}
                    <strong>{searchTerm}</strong>.
                  </span>
                </div>
              )}
            </main>

            <Fab />
            <ViewOrdersUsersModal />
            <NewProductModal />
            <SalesReportModal />
            {productBeingEdited && <EditProductModal />}
            <DeleteProductModal />
          </div>
        )}
      </AdminDashboardContext.Consumer>
    </AdminDashboardProvider>
  );
}
