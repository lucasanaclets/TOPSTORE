import React, { createContext, useCallback, useState } from "react";
import { Product } from "../../../../../../app/entities/Product";

interface AdminDashboardContextValues {
  isNewProductModalOpen: boolean;
  openNewProductModal(): void;
  closeNewProductModal(): void;
  isEditProductModalOpen: boolean;
  openEditProductModal(product: Product): void;
  closeEditProductModal(): void;
  isDeleteProductModalOpen: boolean;
  openDeleteProductModal(product: Product): void;
  closeDeleteProductModal(): void;
  isViewOrdersModalOpen: boolean;
  openViewOrdersModal(): void;
  closeViewOrdersModal(): void;
  isSalesReportModalOpen: boolean;
  openSalesReportModal(): void;
  closeSalesReportModal(): void;
  productBeingEdited: null | Product;
  productBeingDeleted: null | Product;
}

export const AdminDashboardContext = createContext(
  {} as AdminDashboardContextValues
);

export function AdminDashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] =
    useState(false);
  const [isViewOrdersModalOpen, setIsViewOrdersModalOpen] = useState(false);
  const [isSalesReportModalOpen, setIsSalesReportModalOpen] = useState(false);

  const [productBeingEdited, setProductBeingEdited] = useState<null | Product>(
    null
  );

  const [productBeingDeleted, setProductBeingDeleted] =
    useState<null | Product>(null);

  const openNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(true);
  }, []);

  const closeNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(false);
  }, []);

  const openEditProductModal = useCallback((product: Product) => {
    setProductBeingEdited(product);
    setIsEditProductModalOpen(true);
  }, []);

  const closeEditProductModal = useCallback(() => {
    setProductBeingEdited(null);
    setIsEditProductModalOpen(false);
  }, []);

  const openDeleteProductModal = useCallback((product: Product) => {
    setProductBeingDeleted(product);
    setIsDeleteProductModalOpen(true);
  }, []);

  const closeDeleteProductModal = useCallback(() => {
    setIsDeleteProductModalOpen(false);
  }, []);

  const openViewOrdersModal = useCallback(() => {
    setIsViewOrdersModalOpen(true);
  }, []);

  const closeViewOrdersModal = useCallback(() => {
    setIsViewOrdersModalOpen(false);
  }, []);

  const openSalesReportModal = useCallback(() => {
    setIsSalesReportModalOpen(true);
  }, []);

  const closeSalesReportModal = useCallback(() => {
    setIsSalesReportModalOpen(false);
  }, []);

  return (
    <AdminDashboardContext.Provider
      value={{
        isNewProductModalOpen,
        openNewProductModal,
        closeNewProductModal,
        isEditProductModalOpen,
        openEditProductModal,
        closeEditProductModal,
        isDeleteProductModalOpen,
        openDeleteProductModal,
        closeDeleteProductModal,
        isViewOrdersModalOpen,
        openViewOrdersModal,
        closeViewOrdersModal,
        isSalesReportModalOpen,
        openSalesReportModal,
        closeSalesReportModal,
        productBeingEdited,
        productBeingDeleted,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
}
