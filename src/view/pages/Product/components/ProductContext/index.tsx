import React, { createContext, useCallback, useState } from "react";

interface ProductContextValues {
  isBuyProductModalOpen: boolean;
  openBuyProductModal(): void;
  closeBuyProductModal(): void;
}

export const ProductContext = createContext({} as ProductContextValues);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [isBuyProductModalOpen, setIsBuyProductModalOpen] = useState(false);

  const openBuyProductModal = useCallback(() => {
    setIsBuyProductModalOpen(true);
  }, []);

  const closeBuyProductModal = useCallback(() => {
    setIsBuyProductModalOpen(false);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isBuyProductModalOpen,
        openBuyProductModal,
        closeBuyProductModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
