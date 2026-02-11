"use client";

import { createContext, useContext } from "react";

import { useBasket, type UseBasketReturn } from "@/hooks/use-basket";

const BasketContext = createContext<UseBasketReturn | null>(null);

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const basket = useBasket();

  return <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>;
}

/**
 * Consume the basket context. Throws if called outside of a BasketProvider
 * so that missing providers surface immediately during development.
 */
export function useBasketContext(): UseBasketReturn {
  const ctx = useContext(BasketContext);

  if (!ctx) {
    throw new Error("useBasketContext must be used within a <BasketProvider>.");
  }

  return ctx;
}
