import { menuCategories, menuItems } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

export default function Menu() {
  return (
    <section id="menu" className="bg-bg py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-fg leading-tight">
            Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg font-body text-muted leading-relaxed">
            Food so good, your ancestors would ask for a plate.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-16">
          {menuCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);
            return (
              <div key={category} className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-fg border-b border-border pb-3">
                  {category}
                </h3>
                <div className="divide-y divide-border/40">
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
