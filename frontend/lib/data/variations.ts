import { Variation } from "../types";

export const variations: Variation[] = [
  {
    id: "busan-style-toast",
    name: "Busan-Style Street Toast",
    description: "The Busan version is known for being extra generous with vegetables and having a slightly sweeter sauce. Popular in Korea's second-largest city.",
    type: "Traditional",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Extra cabbage - about 50% more than classic version",
      "Sweeter sauce with added sugar or honey",
      "Often includes corn kernels in the egg mixture",
      "More generous portion sizes overall"
    ],
    difficulty: "Easy",
    image_url: "🥪",
    created_date: "2024-01-01"
  },
  {
    id: "isaac-toast-style",
    name: "Isaac Toast Style",
    description: "Inspired by Korea's famous Isaac Toast chain, this version features crispy hash browns inside the sandwich for extra texture.",
    type: "Modern",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Add a crispy hash brown patty as an additional layer",
      "Use sweet potato mousse sauce (sweet potato + mayo + sugar)",
      "Includes pickled radish for crunch and tang",
      "Often adds a fried chicken patty option"
    ],
    difficulty: "Medium",
    image_url: "🍟",
    created_date: "2024-01-01"
  },
  {
    id: "low-carb-toast",
    name: "Low-Carb Korean Toast",
    description: "All the flavors of Korean street toast without the bread. Perfect for keto and low-carb diets.",
    type: "Dietary",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Replace bread with large lettuce leaves or low-carb wraps",
      "Use the egg mixture as the main wrap/vessel",
      "Skip or reduce sugar in the egg mixture",
      "Use sugar-free ketchup in the sauce"
    ],
    difficulty: "Easy",
    image_url: "🥬",
    created_date: "2024-01-01"
  },
  {
    id: "vegan-toast",
    name: "Vegan Korean Toast",
    description: "A completely plant-based version that captures the essence of Korean street toast without any animal products.",
    type: "Dietary",
    base_recipe_id: "vegetarian-toast",
    key_differences: [
      "Use Just Egg or chickpea flour 'egg' mixture",
      "Vegan butter and vegan mayo",
      "Add extra mushrooms and tofu for protein",
      "Nutritional yeast for umami flavor"
    ],
    difficulty: "Medium",
    image_url: "🌱",
    created_date: "2024-01-01"
  },
  {
    id: "breakfast-toast-deluxe",
    name: "Breakfast Toast Deluxe",
    description: "An elevated, brunch-worthy version with premium ingredients and restaurant-quality presentation.",
    type: "Modern",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Use brioche or milk bread instead of white bread",
      "Add smoked salmon or prosciutto",
      "Include avocado slices",
      "Top with microgreens and everything bagel seasoning",
      "Serve with a side of fruit"
    ],
    difficulty: "Medium",
    image_url: "🥑",
    created_date: "2024-01-01"
  },
  {
    id: "spicy-fire-toast",
    name: "Spicy Fire Toast",
    description: "For serious heat lovers - this version amps up the spice level with multiple sources of heat.",
    type: "Modern",
    base_recipe_id: "spicy-kimchi-toast",
    key_differences: [
      "Double the gochugaru in eggs",
      "Add sliced jalapeños or serrano peppers",
      "Mix gochujang into the sauce",
      "Sprinkle with red pepper flakes before serving",
      "Optional: add spicy chicken"
    ],
    difficulty: "Easy",
    image_url: "🔥",
    created_date: "2024-01-01"
  },
  {
    id: "convenience-store-style",
    name: "Convenience Store Style Toast",
    description: "Recreate the pre-packaged Korean convenience store egg sandwiches that are surprisingly delicious.",
    type: "Traditional",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Use very soft, pillow-like milk bread",
      "Cook eggs in a rectangular mold for perfect shape",
      "Sweet mayo-heavy sauce",
      "Wrap in plastic film and press flat",
      "Let it sit for 5 minutes before eating (compacts the flavors)"
    ],
    difficulty: "Easy",
    image_url: "🏪",
    created_date: "2024-01-01"
  },
  {
    id: "protein-power-toast",
    name: "Protein Power Toast",
    description: "A high-protein version perfect for post-workout meals or anyone looking to increase protein intake.",
    type: "Dietary",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Use protein bread or whole grain bread",
      "Increase eggs to 3-4 per sandwich",
      "Add extra lean protein: turkey, chicken breast, or tofu",
      "Include cottage cheese",
      "Reduce sauce or use Greek yogurt-based sauce"
    ],
    difficulty: "Easy",
    image_url: "💪",
    created_date: "2024-01-01"
  },
  {
    id: "sweet-dessert-toast",
    name: "Sweet Dessert Toast",
    description: "A sweet twist on Korean egg toast, perfect for dessert or a sweet breakfast treat.",
    type: "Modern",
    base_recipe_id: "classic-gilgeori-toast",
    key_differences: [
      "Omit vegetables and salt",
      "Add extra sugar, cinnamon, and vanilla to eggs",
      "Replace sauce with Nutella, peanut butter, or cream cheese + honey",
      "Top with sliced bananas or strawberries",
      "Dust with powdered sugar"
    ],
    difficulty: "Easy",
    image_url: "🍰",
    created_date: "2024-01-01"
  }
];
