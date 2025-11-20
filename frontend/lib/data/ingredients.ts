import { Ingredient } from "../types";

export const ingredients: Ingredient[] = [
  {
    id: "white-bread",
    name: "White Bread",
    description: "Soft white sandwich bread is the traditional choice for Korean street toast. The fluffy texture soaks up the egg mixture and toasts to a golden crisp.",
    category: "Bread",
    image_url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    where_to_buy: "Any grocery store or supermarket. Korean bakeries often have slightly sweeter milk bread that works wonderfully.",
    substitutions: ["Milk bread (sweeter, softer)", "Brioche (richer)", "Whole wheat bread (healthier option)"],
    created_date: "2024-01-01"
  },
  {
    id: "eggs",
    name: "Eggs",
    description: "The star of the show! Fresh eggs create the fluffy, savory base that holds all the vegetables together.",
    category: "Proteins",
    image_url: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=80",
    where_to_buy: "Any grocery store. Farm-fresh eggs will give the richest flavor and color.",
    substitutions: ["Egg substitute (for allergies)", "Just Egg (vegan option)"],
    created_date: "2024-01-01"
  },
  {
    id: "cabbage",
    name: "Cabbage",
    description: "Finely shredded cabbage adds crunch, sweetness, and helps create the signature texture of Korean egg toast.",
    category: "Vegetables",
    image_url: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&q=80",
    where_to_buy: "Fresh produce section of any grocery store. Green or napa cabbage both work.",
    substitutions: ["Coleslaw mix (convenient pre-shredded)", "Napa cabbage (more tender)", "Lettuce (lighter option)"],
    created_date: "2024-01-01"
  },
  {
    id: "carrot",
    name: "Carrot",
    description: "Julienned carrots add a pop of color, subtle sweetness, and extra nutrition to the egg mixture.",
    category: "Vegetables",
    image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
    where_to_buy: "Fresh produce section. Pre-julienned carrots are available in some stores.",
    substitutions: ["Bell pepper (for different color)", "Zucchini (milder flavor)"],
    created_date: "2024-01-01"
  },
  {
    id: "green-onion",
    name: "Green Onion (Scallion)",
    description: "Chopped green onions provide a fresh, mild onion flavor that's essential in Korean cooking.",
    category: "Vegetables",
    image_url: "https://images.unsplash.com/photo-1558964450-d8cf46d1e621?w=800&q=80",
    where_to_buy: "Fresh produce section. Often sold in bundles.",
    substitutions: ["Chives (milder)", "Regular onion (stronger, use less)", "Leeks (more subtle)"],
    created_date: "2024-01-01"
  },
  {
    id: "ham",
    name: "Ham",
    description: "Thinly sliced ham adds savory, salty protein. Korean street vendors often use a specific pressed ham.",
    category: "Proteins",
    image_url: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=800&q=80",
    where_to_buy: "Deli section. Korean or Japanese markets carry the authentic squared ham slices.",
    substitutions: ["Bacon (smokier)", "Spam (more traditional Korean)", "Turkey (leaner)", "Omit for vegetarian"],
    created_date: "2024-01-01"
  },
  {
    id: "butter",
    name: "Butter",
    description: "Butter is used for both cooking the eggs and toasting the bread, adding rich flavor and golden color.",
    category: "Other",
    image_url: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80",
    where_to_buy: "Dairy section of any grocery store.",
    substitutions: ["Margarine (dairy-free)", "Cooking oil (neutral flavor)", "Ghee (nuttier flavor)"],
    created_date: "2024-01-01"
  },
  {
    id: "sugar",
    name: "Sugar",
    description: "A small amount of sugar in the eggs creates the signature sweet-savory balance of Korean street food.",
    category: "Seasonings",
    image_url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    where_to_buy: "Baking aisle of any grocery store.",
    substitutions: ["Brown sugar (deeper flavor)", "Honey (natural sweetness)", "Omit if you prefer less sweet"],
    created_date: "2024-01-01"
  },
  {
    id: "ketchup",
    name: "Ketchup",
    description: "Mixed with mayo, ketchup creates the classic sweet and tangy sauce for Korean toast.",
    category: "Sauces",
    image_url: "https://images.unsplash.com/photo-1571686776470-1e5d8a762c0a?w=800&q=80",
    where_to_buy: "Condiment aisle of any grocery store.",
    substitutions: ["Banana ketchup (Filipino style)", "Tomato sauce + sugar"],
    created_date: "2024-01-01"
  },
  {
    id: "mayonnaise",
    name: "Mayonnaise",
    description: "Creamy mayo balances the ketchup and adds richness to the sauce.",
    category: "Sauces",
    image_url: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=800&q=80",
    where_to_buy: "Condiment aisle. Japanese Kewpie mayo is popular in Korean cuisine.",
    substitutions: ["Kewpie mayo (sweeter, tangier)", "Greek yogurt (healthier)", "Vegan mayo"],
    created_date: "2024-01-01"
  },
  {
    id: "kimchi",
    name: "Kimchi",
    description: "Fermented spicy cabbage that adds bold, tangy, umami flavor to Korean dishes.",
    category: "Vegetables",
    image_url: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=800&q=80",
    where_to_buy: "Asian grocery stores, Korean markets, or international sections of larger supermarkets.",
    substitutions: ["Sauerkraut (less spicy)", "Pickled cabbage", "Omit if unavailable"],
    created_date: "2024-01-01"
  },
  {
    id: "gochugaru",
    name: "Gochugaru (Korean Red Pepper Flakes)",
    description: "Coarse Korean red pepper flakes with a mild, slightly sweet heat. Essential for authentic Korean flavor.",
    category: "Seasonings",
    image_url: "https://images.unsplash.com/photo-1583737209508-1bad8a783e93?w=800&q=80",
    where_to_buy: "Korean markets, Asian grocery stores, or online.",
    substitutions: ["Red pepper flakes (spicier)", "Paprika + cayenne (milder)", "Omit for less heat"],
    created_date: "2024-01-01"
  },
  {
    id: "cheese",
    name: "Cheese (Mozzarella/Cheddar)",
    description: "Melty cheese adds indulgent creaminess. Very popular in modern Korean street toast.",
    category: "Other",
    image_url: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80",
    where_to_buy: "Dairy section of any grocery store.",
    substitutions: ["Any melting cheese works", "American cheese (classic)", "Vegan cheese"],
    created_date: "2024-01-01"
  },
  {
    id: "soy-sauce",
    name: "Soy Sauce",
    description: "Salty, umami-rich sauce used in marinades and seasonings.",
    category: "Sauces",
    image_url: "https://images.unsplash.com/photo-1594873269928-854ef3d45e05?w=800&q=80",
    where_to_buy: "Asian food aisle or any grocery store.",
    substitutions: ["Tamari (gluten-free)", "Coconut aminos (soy-free)", "Salt + umami seasoning"],
    created_date: "2024-01-01"
  },
  {
    id: "sesame-oil",
    name: "Sesame Oil",
    description: "Fragrant oil with a nutty flavor, used sparingly for seasoning in Korean cuisine.",
    category: "Sauces",
    image_url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    where_to_buy: "Asian food aisle or any grocery store.",
    substitutions: ["Toasted sesame seeds blended with neutral oil", "Omit if unavailable"],
    created_date: "2024-01-01"
  }
];
