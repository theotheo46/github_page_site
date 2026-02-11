export type Category =
  | "fruits"
  | "vegetables"
  | "meat"
  | "fish"
  | "dairy"
  | "grains"
  | "bakery"
  | "snacks"
  | "beverages"
  | "oils"
  | "nuts"
  | "sweets";

export interface Product {
  id: string;
  name: string;
  emoji: string;
  caloriesPer100g: number;
  category: Category;
}

export interface BasketItem {
  product: Product;
  grams: number;
}
