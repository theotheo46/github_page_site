"use client";

import { BasketSheet } from "@/components/basket-sheet";

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <h1 className="text-lg font-bold">Calorie Calculator</h1>
        </div>
        <BasketSheet />
      </div>
    </header>
  );
}
