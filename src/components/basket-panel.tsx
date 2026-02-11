"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BasketItem } from "@/components/basket-item";
import { CalorieSummary } from "@/components/calorie-summary";
import { EmptyBasket } from "@/components/empty-basket";
import { useBasketContext } from "@/contexts/basket-context";

export function BasketPanel() {
  const { items, updateGrams, removeItem, clearBasket, totalCalories } = useBasketContext();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-lg font-semibold">Basket</h2>
        {items.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearBasket}>
            <Trash2 className="size-4" />
            Clear
          </Button>
        )}
      </div>
      <Separator />
      {items.length === 0 ? (
        <EmptyBasket />
      ) : (
        <>
          <ScrollArea className="flex-1 px-4">
            <div className="divide-y">
              {items.map((item) => (
                <BasketItem
                  key={item.product.id}
                  item={item}
                  onUpdateGrams={updateGrams}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </ScrollArea>
          <div className="px-4 pb-4">
            <CalorieSummary totalCalories={totalCalories} itemCount={items.length} />
          </div>
        </>
      )}
    </div>
  );
}
