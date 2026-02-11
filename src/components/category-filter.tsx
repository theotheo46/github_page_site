"use client";

import { Badge } from "@/components/ui/badge";
import type { Category } from "@/types/product";

const categoryLabels: Record<Category, string> = {
  fruits: "Fruits",
  vegetables: "Vegetables",
  meat: "Meat",
  fish: "Fish",
  dairy: "Dairy",
  grains: "Grains",
  bakery: "Bakery",
  snacks: "Snacks",
  beverages: "Beverages",
  oils: "Oils",
  nuts: "Nuts",
  sweets: "Sweets",
};

const categoryEmojis: Record<Category, string> = {
  fruits: "🍎",
  vegetables: "🥦",
  meat: "🥩",
  fish: "🐟",
  dairy: "🧀",
  grains: "🌾",
  bakery: "🥐",
  snacks: "🍿",
  beverages: "🥤",
  oils: "🫒",
  nuts: "🥜",
  sweets: "🍫",
};

interface CategoryFilterProps {
  categories: Category[];
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className="focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
      >
        <Badge variant={selected === null ? "default" : "outline"}>All</Badge>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category === selected ? null : category)}
          className="focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
        >
          <Badge variant={category === selected ? "default" : "outline"}>
            {categoryEmojis[category]} {categoryLabels[category]}
          </Badge>
        </button>
      ))}
    </div>
  );
}
