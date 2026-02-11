"use client";

import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculateCalories } from "@/lib/utils";
import type { BasketItem as BasketItemType } from "@/types/product";

interface BasketItemProps {
  item: BasketItemType;
  onUpdateGrams: (productId: string, grams: number) => void;
  onRemove: (productId: string) => void;
}

export function BasketItem({ item, onUpdateGrams, onRemove }: BasketItemProps) {
  const calories = calculateCalories(item.product.caloriesPer100g, item.grams);

  return (
    <div className="flex items-center gap-2 py-2">
      <span className="text-lg" role="img" aria-label={item.product.name}>
        {item.product.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{item.product.name}</p>
        <p className="text-muted-foreground text-xs">{calories} kcal</p>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => onUpdateGrams(item.product.id, item.grams - 50)}
          aria-label="Decrease amount"
        >
          <Minus />
        </Button>
        <Input
          type="number"
          value={item.grams}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val)) {
              onUpdateGrams(item.product.id, val);
            }
          }}
          className="h-7 w-16 px-1 text-center text-xs"
          min={0}
          aria-label={`Grams of ${item.product.name}`}
        />
        <span className="text-muted-foreground text-xs">g</span>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => onUpdateGrams(item.product.id, item.grams + 50)}
          aria-label="Increase amount"
        >
          <Plus />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon-xs"
        onClick={() => onRemove(item.product.id)}
        aria-label={`Remove ${item.product.name}`}
      >
        <X />
      </Button>
    </div>
  );
}
