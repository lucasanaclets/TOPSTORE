import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../../components/DropdownMenu";
import { useAdminDashboardContext } from "../AdminDashboardContext/useAdminDashboardContext";
import { Product } from "../../../../../../app/entities/Product";

interface ProductOptionsMenuProps {
  data: Product;
}

export function ProductOptionsMenu({ data }: ProductOptionsMenuProps) {
  const { openEditProductModal, openDeleteProductModal } =
    useAdminDashboardContext();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="outline-none">
          <DotsHorizontalIcon className="w-6 h-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        className="w-[100px] bg-gray-50 space-y-1"
      >
        <DropdownMenu.Item
          onSelect={() => openEditProductModal(data)}
          className="data-[highlighted]:bg-gray-200"
        >
          Editar
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => openDeleteProductModal(data)}
          className="data-[highlighted]:bg-gray-200"
        >
          Excluir
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
