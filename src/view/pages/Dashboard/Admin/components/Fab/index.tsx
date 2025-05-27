import {
  BarChartIcon,
  ChevronUpIcon,
  FileTextIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../../components/DropdownMenu";
import { useAdminDashboardContext } from "../AdminDashboardContext/useAdminDashboardContext";

export function Fab() {
  const { openNewProductModal, openViewOrdersModal, openSalesReportModal } =
    useAdminDashboardContext();

  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className=" text-white h-12 w-12 bg-blue-150 rounded-full flex items-center justify-center">
            <ChevronUpIcon className="h-7 w-7" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="end">
          <DropdownMenu.Item className="gap-2" onSelect={openNewProductModal}>
            <PlusCircledIcon className="w-5 h-5" />
            Adicionar Produto
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2" onSelect={openViewOrdersModal}>
            <FileTextIcon className="w-5 h-5" />
            Visulizar Pedidos
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2" onSelect={openSalesReportModal}>
            <BarChartIcon className="w-5 h-5" />
            Relatório de Vendas
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
