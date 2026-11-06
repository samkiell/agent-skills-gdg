import type { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const formattedPrice = `₦${item.price.toLocaleString()}`;

  return (
    <article className="py-3">
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="text-lg sm:text-xl font-heading font-bold text-fg shrink-0">
          {item.name}
        </h4>
        <span className="flex-1 border-b-2 border-dotted border-border mx-2 self-center translate-y-1"></span>
        <span className="text-base sm:text-lg font-heading font-bold text-fg shrink-0">
          {formattedPrice}
        </span>
      </div>
      <p className="mt-1.5 text-sm sm:text-base font-body text-muted leading-relaxed">
        {item.description}
      </p>
    </article>
  );
}
