import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../../../components/DropdownMenu";
import { cn } from "../../../../../../../app/utils/cn";
import { Spinner } from "../../../../../../components/Spinner";

interface StatusMenuProps {
  selectedStatus: string;
  onChangeStatus(status: string): void;
  isLoading: boolean;
  status: string;
}

export function StatusMenu({
  selectedStatus,
  onChangeStatus,
  isLoading,
  status,
}: StatusMenuProps) {
  if (status === "Prazo de Pagamento Expirado") {
    return (
      <div className="flex justify-end mt-3 w-[91%]">
        <span className="text-sm px-3 border border-red-600 text-red-600 rounded-full">
          {status}
        </span>
      </div>
    );
  }

  return (
    <div className="w-[91%] flex justify-end">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={cn(
              "flex items-center justify-center gap-1 border border-yellow-600 text-yellow-600 hover:bg-yellow-100/20 transition-colors rounded-full text-sm px-3 py-1",
              selectedStatus === "Aguardando Pagamento" &&
                "border-gray-600 text-gray-600 hover:bg-gray-100/20",
              selectedStatus === "Entrega em Andamento" &&
                "border-blue-600 text-blue-600 hover:bg-blue-100/20",
              selectedStatus === "Entrega Concluída" &&
                "border-green-600 text-green-600 hover:bg-green-100/20"
            )}
          >
            {!isLoading && (
              <>
                <span>{selectedStatus}</span>
                <ChevronDownIcon className="h-5 w-5 -mt-[2px]" />
              </>
            )}

            {isLoading && (
              <Spinner
                className={cn(
                  "w-4 h-4 text-gray-100/20 fill-yellow-600",
                  selectedStatus === "Aguardando Pagamento" && "fill-gray-600",
                  selectedStatus === "Entrega em Andamento" && "fill-blue-600",
                  selectedStatus === "Entrega Concluída" && "fill-green-600"
                )}
              />
            )}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onSelect={() => onChangeStatus("Em Análise")}>
            Em Análise
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => onChangeStatus("Aguardando Pagamento")}
          >
            Aguardando Pagamento
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => onChangeStatus("Entrega em Andamento")}
          >
            Entrega em Andamento
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => onChangeStatus("Entrega Concluída")}
          >
            Entrega Concluída
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
