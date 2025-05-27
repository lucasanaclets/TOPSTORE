import { useContext } from "react";
import { UserDashboardContext } from ".";

export function useUserDashboardContext() {
  return useContext(UserDashboardContext);
}
