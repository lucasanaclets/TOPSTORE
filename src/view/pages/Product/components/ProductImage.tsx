import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Product } from "../../../../app/entities/Product";

interface ProductImageProps {
  data: Product;
}

export function ProductImage({ data }: ProductImageProps) {
  return (
    <div className="bg-white rounded-3xl w-full h-full max-w-[780px] max-h-[720px] flex items-center justify-center">
      <LazyLoadImage
        className="w-full h-full p-2"
        src={`/products/${data.product_model.image_name}`}
        effect="blur"
        alt="Imagem do Produto"
        threshold={100}
      />
    </div>
  );
}
