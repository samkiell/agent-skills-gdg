import { menuCategories, menuItems } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

export default function Menu() {
  return (
    <section id="menu" className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-accent">
            Curated Offerings
          </span>
          <h2 className="mt-2 text-3xl font-heading font-extrabold tracking-tight text-fg sm:text-4xl">
            Menu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base font-body text-muted sm:text-lg">
            Food so good, your ancestors would ask for a plate.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {menuCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);
            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-heading font-bold text-fg sm:text-2xl">
                    {category}
                  </h3>
                  <div className="h-px flex-1 bg-border"></div>
                  <span className="text-xs font-body font-semibold text-muted">
                    {items.length} dishes
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
