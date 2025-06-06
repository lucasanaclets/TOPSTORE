import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { cn } from "../../app/utils/cn";

function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger className="outline-none" asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  align?: "center" | "start" | "end";
  alignOffset?: number;
  className?: string;
}

function DropdownMenuContent({
  children,
  className,
  align,
  alignOffset,
}: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        sideOffset={5}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "py-1 px-2 rounded-md bg-white space-y-1 shadow-[0_11px_20px_0px_rgba(0,0,0,0.10)] z-[99]",
          "data-[side=bottom]:animate-slide-up-and-fade",
          "data-[side=top]:animate-slide-down-and-fade",
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "min-h-[20px] outline-none flex items-center  px-4 py-2 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-md transition-colors cursor-pointer",
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
