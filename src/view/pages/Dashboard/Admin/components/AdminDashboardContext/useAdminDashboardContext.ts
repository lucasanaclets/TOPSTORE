import { useContext } from "react";
import { AdminDashboardContext } from ".";

export function useAdminDashboardContext() {
  return useContext(AdminDashboardContext);
}
