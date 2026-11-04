import type { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const formattedPrice = `₦${item.price.toLocaleString()}`;

  return (
    <article className="group flex flex-col justify-between rounded-token border border-border bg-surface p-6 shadow-sm hover:border-accent/40 hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-base font-heading font-bold text-fg group-hover:text-accent sm:text-lg">
            {item.name}
          </h4>
          <span className="shrink-0 rounded-full bg-surface-warm px-3 py-1 text-xs font-body font-bold text-accent">
            {formattedPrice}
          </span>
        </div>
        <p className="mt-3 text-sm font-body leading-relaxed text-muted">
          {item.description}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-1 border-t border-border/60 pt-3 text-xs font-body font-medium text-accent">
        <span>Order at table</span>
        <span>&rarr;</span>
      </div>
    </article>
  );
}
