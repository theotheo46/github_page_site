import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCalories(caloriesPer100g: number, grams: number): number {
  return Math.round((caloriesPer100g * grams) / 100);
}
