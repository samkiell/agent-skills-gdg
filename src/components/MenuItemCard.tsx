import type { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const formattedPrice = `₦${item.price.toLocaleString()}`;

  return (
    <article className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-bold text-white">
            {item.name}
          </h4>
          <span className="shrink-0 rounded-full border border-purple-500/40 bg-purple-500/20 px-3.5 py-1 text-xs font-bold text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.35)]">
            {formattedPrice}
          </span>
        </div>
        <p className="mt-3 text-sm font-normal leading-relaxed text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}
