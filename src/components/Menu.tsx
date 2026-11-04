import { menuCategories, menuItems } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

export default function Menu() {
  return (
    <section id="menu" className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-heading font-bold text-fg sm:text-3xl">
            Menu
          </h2>
          <p className="mt-2 text-sm font-body text-muted sm:text-base">
            Food so good, your ancestors would ask for a plate.
          </p>
        </div>

        <div className="mt-10 space-y-12">
          {menuCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);
            return (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-heading font-semibold text-fg border-b border-border pb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
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

