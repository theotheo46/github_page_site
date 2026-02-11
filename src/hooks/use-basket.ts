"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { products } from "@/data/products";
import { calculateCalories } from "@/lib/utils";
import type { BasketItem, Product } from "@/types/product";

const STORAGE_KEY = "calorie-basket";

/** Serializable shape stored in localStorage (product ID + grams only). */
interface StoredItem {
  productId: string;
  grams: number;
}

/** Read saved basket from localStorage and rehydrate with full Product data. */
function loadBasket(): BasketItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const stored: StoredItem[] = JSON.parse(raw);
    const productMap = new Map(products.map((p) => [p.id, p]));

    return stored.reduce<BasketItem[]>((items, { productId, grams }) => {
      const product = productMap.get(productId);
      // Skip entries whose product no longer exists in the catalog
      if (product && grams > 0) {
        items.push({ product, grams });
      }
      return items;
    }, []);
  } catch {
    // Corrupt data -- start fresh
    return [];
  }
}

/** Persist basket to localStorage in the minimal serializable form. */
function saveBasket(items: BasketItem[]): void {
  if (typeof window === "undefined") return;

  const stored: StoredItem[] = items.map(({ product, grams }) => ({
    productId: product.id,
    grams,
  }));

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // localStorage may be full or unavailable -- silently ignore
  }
}

export interface UseBasketReturn {
  items: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateGrams: (productId: string, grams: number) => void;
  clearBasket: () => void;
  totalCalories: number;
}

const DEFAULT_GRAMS = 100;

export function useBasket(): UseBasketReturn {
  const [items, setItems] = useState<BasketItem[]>(loadBasket);

  // Persist whenever items change
  useEffect(() => {
    saveBasket(items);
  }, [items]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx !== -1) {
        // Increment existing item by the default portion
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          grams: updated[idx].grams + DEFAULT_GRAMS,
        };
        return updated;
      }
      return [...prev, { product, grams: DEFAULT_GRAMS }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateGrams = useCallback((productId: string, grams: number) => {
    if (grams <= 0) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId));
      return;
    }

    setItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, grams } : item))
    );
  }, []);

  const clearBasket = useCallback(() => {
    setItems([]);
  }, []);

  const totalCalories = useMemo(
    () =>
      items.reduce(
        (sum, { product, grams }) => sum + calculateCalories(product.caloriesPer100g, grams),
        0
      ),
    [items]
  );

  return { items, addItem, removeItem, updateGrams, clearBasket, totalCalories };
}
