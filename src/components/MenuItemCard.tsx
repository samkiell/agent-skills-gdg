import type { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const formattedPrice = `₦${item.price.toLocaleString()}`;

  return (
    <article className="flex flex-col justify-between rounded-token border border-border bg-surface p-5">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="text-base font-heading font-semibold text-fg">
            {item.name}
          </h4>
          <span className="shrink-0 text-sm font-body font-medium text-fg">
            {formattedPrice}
          </span>
        </div>
        <p className="mt-2 text-sm font-body text-muted">
          {item.description}
        </p>
      </div>
    </article>
  );
}

