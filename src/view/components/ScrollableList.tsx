import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";
import { cn } from "../../app/utils/cn";

interface ScrollableListProps {
  children: React.ReactNode;
  ordersQuantity: number;
}

export function ScrollableList({
  children,
  ordersQuantity,
}: ScrollableListProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn(
        "relative w-full h-[360px] overflow-hidden",
        ordersQuantity <= 3 && "h-full"
      )}
    >
      <ScrollAreaPrimitive.Viewport className="w-full h-full rounded-md">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="absolute right-0 top-0 bottom-0 w-2 flex touch-none select-none transition-colors bg-transparent"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 bg-gray-100 rounded-full" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
}
