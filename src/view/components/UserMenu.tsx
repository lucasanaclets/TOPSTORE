import { ExitIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";
import { cn } from "../../app/utils/cn";
import { useUserDashboardContext } from "../pages/Dashboard/User/components/UserDashboardContext/useUserDashboardContext";

export function UserMenu() {
  const { signout, userRole } = useAuth();
  const { openViewOrdersModal } = useUserDashboardContext();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-blue-150 rounded-full w-12 h-12 flex items-center justify-center border-blue-150">
          <PersonIcon className="w-6 h-6 text-white" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className={cn(userRole === "admin" ? "w-32" : "w-auto")}
        align="end"
      >
        {userRole === "user" && (
          <DropdownMenu.Item
            onSelect={openViewOrdersModal}
            className="flex justify-between items-center gap-4"
          >
            Meus pedidos
            <FileTextIcon className="w-4 h-4" />
          </DropdownMenu.Item>
        )}

        <DropdownMenu.Item
          onSelect={signout}
          className="flex justify-between items-center"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
