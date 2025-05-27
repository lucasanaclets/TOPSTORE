import * as RdxDialog from "@radix-ui/react-dialog";
import { cn } from "../../app/utils/cn";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
  onClose?(): void;
}

export function Modal({
  open,
  children,
  title,
  rightAction,
  onClose,
}: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/30 backdrop-blur-[3px]",
            "data-[state=open]:animate-overlay-show"
          )}
        />

        <RdxDialog.Content
          className={cn(
            "outline-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px]",
            "data-[state=open]:animate-content-show"
          )}
        >
          {/* Necessários para acessibilidade | Remover warnings do console */}
          <RdxDialog.Title hidden>Título</RdxDialog.Title>
          <RdxDialog.Description hidden>Descrição</RdxDialog.Description>
          {/* ------------------------------------------------------------- */}

          <header className="h-12 flex items-center justify-between text-gray-800">
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center outline-none"
            >
              <Cross2Icon className="h-6 w-6 " />
            </button>

            <span className="text-lg tracking-[-1px] font-bold">{title}</span>
            <div className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </div>
          </header>

          <div>{children}</div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
