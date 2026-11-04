export type MenuCategory = "Starters" | "Mains" | "Sides" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
}

export const menuCategories: MenuCategory[] = [
  "Starters",
  "Mains",
  "Sides",
  "Drinks",
];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "suya-lane-skewers",
    name: "Suya Lane Skewers",
    description: "Spicy beef skewers. Your mouth will file a complaint. Your heart will approve.",
    price: 3500,
    category: "Starters",
  },
  {
    id: "puff-puff-plot-twist",
    name: "Puff Puff Plot Twist",
    description: "Golden dough balls with a surprise inside. We will not say what.",
    price: 2000,
    category: "Starters",
  },

  // Mains
  {
    id: "jollof-of-destiny",
    name: "Jollof of Destiny",
    description: "Smoky party jollof with grilled chicken. Tastes like a good decision.",
    price: 5500,
    category: "Mains",
  },
  {
    id: "egusi-therapy",
    name: "Egusi Therapy",
    description: "Rich egusi with pounded yam. Cheaper than a session, works faster.",
    price: 6000,
    category: "Mains",
  },
  {
    id: "amala-pressure",
    name: "Amala Pressure",
    description: "Amala, ewedu and gbegiri. Do not talk to us until we finish.",
    price: 5000,
    category: "Mains",
  },
  {
    id: "ofada-reloaded",
    name: "Ofada Reloaded",
    description: "Ofada rice with ayamase. Sequel is better than the original.",
    price: 6500,
    category: "Mains",
  },

  // Sides
  {
    id: "plantain-season-2",
    name: "Plantain Season 2",
    description: "Fried plantain. Returns every episode.",
    price: 1800,
    category: "Sides",
  },
  {
    id: "moi-moi-sequel",
    name: "Moi Moi Sequel",
    description: "Steamed bean pudding. Nobody asked for a sequel. We made it anyway.",
    price: 1500,
    category: "Sides",
  },

  // Drinks
  {
    id: "zobo-zero-regrets",
    name: "Zobo Zero Regrets",
    description: "Chilled hibiscus drink. Ginger included, regrets not.",
    price: 1500,
    category: "Drinks",
  },
  {
    id: "chapman-chronicles",
    name: "Chapman Chronicles",
    description: "Fizzy, fruity and unreasonably photogenic.",
    price: 2500,
    category: "Drinks",
  },
];
