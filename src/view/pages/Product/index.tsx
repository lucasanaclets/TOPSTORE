import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link, useParams } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails";
import { ProductImage } from "./components/ProductImage";
import { useProductController } from "./useProductController";
import { Spinner } from "../../components/Spinner";
import { ProductProvider } from "./components/ProductContext";
import { BuyProductModal } from "./modals/BuyProductModal";

export function Product() {
  const { id } = useParams();

  const { product, isLoading } = useProductController(id);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>Produto não encontrado no sistema</h1>
      </div>
    );
  }

  return (
    <ProductProvider>
      <div className="w-full h-full p-4 flex flex-col">
        <header className="h-12 flex items-center pl-5">
          <Link
            to={"/"}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <ChevronLeftIcon className="w-6 h-6 " />
            <span className="tracking-[-0.5px] text-lg">Voltar</span>
          </Link>
        </header>

        <main className="flex-1 flex flex-col lg:flex-row gap-0 lg:gap-6 max-h-full mt-10">
          <div className="w-full lg:w-1/2 flex justify-center items-center py-0 lg:py-4">
            <ProductImage data={product!} />
          </div>

          <div className="w-full lg:w-1/2">
            <ProductDetails data={product!} />
          </div>
        </main>

        <BuyProductModal
          product_id={product.id}
          product_name={product.model_name}
          product_value={product.value}
        />
      </div>
    </ProductProvider>
  );
}
