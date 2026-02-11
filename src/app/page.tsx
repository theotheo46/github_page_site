"use client";

import { Header } from "@/components/header";
import { ProductCatalog } from "@/components/product-catalog";
import { BasketPanel } from "@/components/basket-panel";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-6">
          <div className="min-w-0 flex-1">
            <ProductCatalog />
          </div>
          <aside className="hidden w-80 shrink-0 lg:block">
            <div className="bg-card sticky top-20 rounded-lg border">
              <BasketPanel />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
