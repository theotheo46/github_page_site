export function EmptyBasket() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <span className="text-4xl">🛒</span>
      <p className="text-muted-foreground mt-2 text-sm">Your basket is empty</p>
      <p className="text-muted-foreground text-xs">
        Add products from the catalog to start counting calories
      </p>
    </div>
  );
}
