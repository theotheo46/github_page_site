interface CalorieSummaryProps {
  totalCalories: number;
  itemCount: number;
}

export function CalorieSummary({ totalCalories, itemCount }: CalorieSummaryProps) {
  return (
    <div className="border-t pt-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Total Calories</p>
          <p className="text-muted-foreground text-xs">
            {itemCount} {itemCount === 1 ? "item" : "items"} in basket
          </p>
        </div>
        <p className="text-2xl font-bold">{totalCalories.toLocaleString()} kcal</p>
      </div>
    </div>
  );
}
