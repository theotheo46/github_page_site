"use client";

import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <Card className="gap-0 py-0 transition-shadow hover:shadow-md">
      <CardContent className="flex items-center gap-3 p-3">
        <span className="text-3xl" role="img" aria-label={product.name}>
          {product.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{product.name}</p>
          <p className="text-muted-foreground text-xs">{product.caloriesPer100g} kcal / 100g</p>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to basket`}
        >
          <Plus className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
