import React, { createContext, useCallback, useState } from "react";

interface UserDashboardContextValues {
  isViewOrdersModalOpen: boolean;
  openViewOrdersModal(): void;
  closeViewOrdersModal(): void;
}

export const UserDashboardContext = createContext(
  {} as UserDashboardContextValues
);

export function UserDashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isViewOrdersModalOpen, setIsViewOrdersModalOpen] = useState(false);

  const openViewOrdersModal = useCallback(() => {
    setIsViewOrdersModalOpen(true);
  }, []);

  const closeViewOrdersModal = useCallback(() => {
    setIsViewOrdersModalOpen(false);
  }, []);

  return (
    <UserDashboardContext.Provider
      value={{
        isViewOrdersModalOpen,
        openViewOrdersModal,
        closeViewOrdersModal,
      }}
    >
      {children}
    </UserDashboardContext.Provider>
  );
}
