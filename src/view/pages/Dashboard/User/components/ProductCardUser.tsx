import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Product } from "../../../../../app/entities/Product";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Link } from "react-router-dom";

interface ProductCardUserProps {
  data: Product;
}

export function ProductCardUser({ data }: ProductCardUserProps) {
  const { model_name, value, id } = data;
  const { image_name } = data.product_model;

  return (
    <div className="w-full max-w-[204px] h-[320px] max-h-[410px] rounded-3xl bg-white p-4 flex flex-col items-center justify-between">
      <LazyLoadImage
        className="w-[120px] h-[144px]"
        src={`/products/${image_name}`}
        effect="blur"
        alt="Imagem do Produto"
        threshold={100}
      />

      <div className="h-full py-4 flex flex-col gap-1 text-gray-800 w-full">
        <strong>Apple {model_name}</strong>
        <strong>{formatCurrency(value)}</strong>
      </div>

      <Link
        to={`product/${id}`}
        className="w-full text-center p-1 bg-blue-150 text-gray-100 rounded-lg hover:bg-blue-800 transition-colors"
      >
        Ver detalhes
      </Link>
    </div>
  );
}
