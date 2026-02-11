"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BasketPanel } from "@/components/basket-panel";
import { useBasketContext } from "@/contexts/basket-context";

export function BasketSheet() {
  const { items } = useBasketContext();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative gap-2 lg:hidden">
          <ShoppingCart className="size-4" />
          Basket
          {items.length > 0 && (
            <Badge className="size-5 justify-center p-0 text-[10px]">{items.length}</Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-md">
        <SheetHeader className="sr-only">
          <SheetTitle>Your Basket</SheetTitle>
        </SheetHeader>
        <BasketPanel />
      </SheetContent>
    </Sheet>
  );
}
