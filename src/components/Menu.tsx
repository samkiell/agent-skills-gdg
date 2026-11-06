import { menuCategories, menuItems } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

const categoryEmojis: Record<string, string> = {
  Starters: "🥟",
  Mains: "🍲",
  Sides: "🍟",
  Drinks: "🍹",
};

export default function Menu() {
  return (
    <section id="menu" className="relative bg-[#0B0F19] py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            <span className="mr-3">🍽️</span>
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Menu
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal text-slate-300">
            Food so good, your ancestors would ask for a plate.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {menuCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);
            const emoji = categoryEmojis[category] || "✨";
            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="text-2xl">{emoji}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {category}
                  </h3>
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
