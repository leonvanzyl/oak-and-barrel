export type MenuCategory =
  | "Appetizers"
  | "Sushi & Sashimi"
  | "Prime Steaks"
  | "Burgers & Grills"
  | "Craft Beverages"
  | "Desserts";

export type MenuBadge = "popular" | "chefs-pick" | null;

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge: MenuBadge;
}

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "app-1",
    category: "Appetizers",
    name: "Truffle Burrata",
    description: "Creamy burrata, black truffle, arugula, aged balsamic, grilled sourdough",
    price: 18,
    badge: "popular",
  },
  {
    id: "app-2",
    category: "Appetizers",
    name: "Wagyu Beef Tartare",
    description: "Hand-cut wagyu, quail egg, capers, cornichons, truffle aioli",
    price: 24,
    badge: "chefs-pick",
  },
  {
    id: "app-3",
    category: "Appetizers",
    name: "Crispy Calamari",
    description: "Lightly battered, served with marinara and lemon aioli",
    price: 16,
    badge: null,
  },
  {
    id: "app-4",
    category: "Appetizers",
    name: "Soup of the Day",
    description: "Chef's daily creation, served with artisan bread",
    price: 12,
    badge: null,
  },

  // Sushi & Sashimi
  {
    id: "sushi-1",
    category: "Sushi & Sashimi",
    name: "Chef's Omakase",
    description: "A curated selection of the freshest seasonal fish, 12 pieces",
    price: 85,
    badge: "chefs-pick",
  },
  {
    id: "sushi-2",
    category: "Sushi & Sashimi",
    name: "Dragon Roll",
    description: "Shrimp tempura, eel, avocado, spicy mayo, eel sauce",
    price: 22,
    badge: "popular",
  },
  {
    id: "sushi-3",
    category: "Sushi & Sashimi",
    name: "Salmon Sashimi",
    description: "8 pieces of premium Norwegian salmon",
    price: 26,
    badge: null,
  },
  {
    id: "sushi-4",
    category: "Sushi & Sashimi",
    name: "Spicy Tuna Roll",
    description: "Fresh tuna, spicy mayo, cucumber, sesame seeds",
    price: 18,
    badge: null,
  },
  {
    id: "sushi-5",
    category: "Sushi & Sashimi",
    name: "Rainbow Roll",
    description: "California roll topped with assorted sashimi",
    price: 24,
    badge: null,
  },

  // Prime Steaks
  {
    id: "steak-1",
    category: "Prime Steaks",
    name: "Prime Ribeye",
    description: "16oz aged ribeye, herb butter, roasted garlic, seasonal vegetables",
    price: 58,
    badge: "chefs-pick",
  },
  {
    id: "steak-2",
    category: "Prime Steaks",
    name: "Filet Mignon",
    description: "8oz center-cut tenderloin, red wine reduction, truffle mash",
    price: 52,
    badge: "popular",
  },
  {
    id: "steak-3",
    category: "Prime Steaks",
    name: "NY Strip",
    description: "14oz bone-in strip, peppercorn sauce, crispy onion rings",
    price: 48,
    badge: null,
  },
  {
    id: "steak-4",
    category: "Prime Steaks",
    name: "Tomahawk Ribeye",
    description: "32oz bone-in ribeye for two, roasted bone marrow, chimichurri",
    price: 95,
    badge: null,
  },

  // Burgers & Grills
  {
    id: "burger-1",
    category: "Burgers & Grills",
    name: "The Classic Oak",
    description: "Prime beef patty, aged cheddar, lettuce, tomato, Oak & Barrel sauce",
    price: 19,
    badge: "popular",
  },
  {
    id: "burger-2",
    category: "Burgers & Grills",
    name: "Wagyu Smash Burger",
    description: "Double wagyu patties, American cheese, caramelized onions, truffle aioli",
    price: 28,
    badge: "chefs-pick",
  },
  {
    id: "burger-3",
    category: "Burgers & Grills",
    name: "Truffle Mushroom Burger",
    description: "Beef patty, swiss cheese, sautéed mushrooms, truffle mayo, arugula",
    price: 24,
    badge: null,
  },
  {
    id: "burger-4",
    category: "Burgers & Grills",
    name: "BBQ Bacon Burger",
    description: "Beef patty, smoked bacon, cheddar, crispy onions, house BBQ",
    price: 22,
    badge: null,
  },

  // Craft Beverages
  {
    id: "bev-1",
    category: "Craft Beverages",
    name: "Local IPA",
    description: "Hoppy and citrus-forward, from our local craft brewery",
    price: 8,
    badge: null,
  },
  {
    id: "bev-2",
    category: "Craft Beverages",
    name: "Belgian Wheat",
    description: "Light and refreshing with hints of orange and coriander",
    price: 9,
    badge: null,
  },
  {
    id: "bev-3",
    category: "Craft Beverages",
    name: "Stout",
    description: "Rich and creamy with coffee and chocolate notes",
    price: 9,
    badge: null,
  },
  {
    id: "bev-4",
    category: "Craft Beverages",
    name: "Pilsner",
    description: "Clean and crisp, a perfect complement to any meal",
    price: 7,
    badge: null,
  },
  {
    id: "bev-5",
    category: "Craft Beverages",
    name: "House Cabernet",
    description: "Full-bodied with dark fruit and oak undertones",
    price: 14,
    badge: "popular",
  },
  {
    id: "bev-6",
    category: "Craft Beverages",
    name: "Napa Chardonnay",
    description: "Buttery and elegant with notes of vanilla and pear",
    price: 16,
    badge: null,
  },

  // Desserts
  {
    id: "dessert-1",
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description: "Warm dark chocolate cake with molten center, vanilla ice cream",
    price: 14,
    badge: "popular",
  },
  {
    id: "dessert-2",
    category: "Desserts",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: 12,
    badge: "chefs-pick",
  },
  {
    id: "dessert-3",
    category: "Desserts",
    name: "New York Cheesecake",
    description: "Creamy cheesecake, graham crust, berry compote",
    price: 11,
    badge: null,
  },
  {
    id: "dessert-4",
    category: "Desserts",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
    price: 13,
    badge: null,
  },
];

export const categories: MenuCategory[] = [
  "Appetizers",
  "Sushi & Sashimi",
  "Prime Steaks",
  "Burgers & Grills",
  "Craft Beverages",
  "Desserts",
];

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getPopularItems(): MenuItem[] {
  return menuItems.filter((item) => item.badge === "popular");
}

export function getChefsPicks(): MenuItem[] {
  return menuItems.filter((item) => item.badge === "chefs-pick");
}

export function getFeaturedItems(count: number = 6): MenuItem[] {
  return menuItems.filter((item) => item.badge !== null).slice(0, count);
}
