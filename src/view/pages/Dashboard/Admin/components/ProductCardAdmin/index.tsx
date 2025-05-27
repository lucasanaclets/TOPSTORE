import { StarFilledIcon } from "@radix-ui/react-icons";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { ProductOptionsMenu } from "./ProductOptionsMenu";
import { Product } from "../../../../../../app/entities/Product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProductCardAdminProps {
  data: Product;
}

export function ProductCardAdmin({ data }: ProductCardAdminProps) {
  const { model_name, value } = data;
  const { image_name } = data.product_model;

  return (
    <div className="w-full max-w-[204px] h-full max-h-[310px] rounded-3xl bg-white p-4 flex flex-col items-center">
      <div className="w-full flex justify-end mb-1">
        <ProductOptionsMenu data={data} />
      </div>

      <LazyLoadImage
        className="w-[110px] h-[134px]"
        src={`/products/${image_name}`}
        effect="blur"
        alt="Imagem do Produto"
        threshold={100}
      />

      <div className="mt-2 flex flex-col gap-1 text-gray-800 w-full">
        <strong>Apple {model_name}</strong>
        <div className="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
        </div>
      </div>

      <div className="w-full mt-2 h-full flex items-end">
        <strong>{formatCurrency(value)}</strong>
      </div>
    </div>
  );
}
