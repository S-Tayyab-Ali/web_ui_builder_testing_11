import { Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    id: "classic-gilgeori-toast",
    title: "Classic Gilgeori Toast",
    description: "The authentic Korean street toast with fluffy scrambled eggs, fresh vegetables, and sweet-savory sauce. This is the version you'll find at street vendors across Korea.",
    ingredients: [
      { name: "White bread", amount: "2", unit: "slices" },
      { name: "Eggs", amount: "2", unit: "large" },
      { name: "Cabbage", amount: "1/4", unit: "cup, shredded" },
      { name: "Carrot", amount: "2", unit: "tablespoons, julienned" },
      { name: "Green onion", amount: "1", unit: "stalk, chopped" },
      { name: "Ham", amount: "2", unit: "slices" },
      { name: "Butter", amount: "2", unit: "tablespoons" },
      { name: "Sugar", amount: "1", unit: "teaspoon" },
      { name: "Salt", amount: "1/4", unit: "teaspoon" },
      { name: "Ketchup", amount: "2", unit: "tablespoons" },
      { name: "Mayonnaise", amount: "1", unit: "tablespoon" }
    ],
    instructions: [
      { order: 1, description: "In a bowl, crack eggs and add shredded cabbage, julienned carrot, chopped green onion, sugar, and salt. Mix well." },
      { order: 2, description: "Heat a large flat pan or griddle over medium heat. Add 1 tablespoon butter." },
      { order: 3, description: "Pour the egg mixture onto the pan and spread it into a rectangle roughly the size of your bread slices." },
      { order: 4, description: "Place ham slices on top of the egg while it's still slightly runny." },
      { order: 5, description: "Once the bottom is set, carefully flip the egg and ham together. Cook for another minute." },
      { order: 6, description: "In the same pan, add remaining butter and toast the bread slices until golden brown on both sides." },
      { order: 7, description: "Mix ketchup and mayonnaise together to make the sauce." },
      { order: 8, description: "Place the egg and ham on one slice of toasted bread, spread sauce on top, and cover with the other slice." },
      { order: 9, description: "Cut diagonally and serve hot." }
    ],
    prep_time: 10,
    cook_time: 15,
    difficulty: "Easy",
    dietary_tags: [],
    image_url: "🥪",
    tips: [
      "The key is to mix vegetables directly into the eggs for even distribution",
      "Don't overcook the eggs - they should be slightly soft when you flip them",
      "Press down gently with a spatula while cooking for a compact texture"
    ],
    created_date: "2024-01-01",
    featured: true
  },
  {
    id: "cheese-lovers-toast",
    title: "Cheese Lover's Korean Toast",
    description: "A melty, indulgent version loaded with cheese. Perfect for breakfast or a satisfying snack.",
    ingredients: [
      { name: "White bread", amount: "2", unit: "slices" },
      { name: "Eggs", amount: "2", unit: "large" },
      { name: "Cabbage", amount: "1/4", unit: "cup, shredded" },
      { name: "Mozzarella cheese", amount: "1/2", unit: "cup, shredded" },
      { name: "Cheddar cheese", amount: "2", unit: "slices" },
      { name: "Ham", amount: "2", unit: "slices" },
      { name: "Butter", amount: "2", unit: "tablespoons" },
      { name: "Sugar", amount: "1", unit: "teaspoon" },
      { name: "Salt", amount: "1/4", unit: "teaspoon" },
      { name: "Ketchup", amount: "2", unit: "tablespoons" },
      { name: "Mayonnaise", amount: "1", unit: "tablespoon" }
    ],
    instructions: [
      { order: 1, description: "Beat eggs with cabbage, sugar, and salt." },
      { order: 2, description: "Heat pan with butter and pour egg mixture, spreading evenly." },
      { order: 3, description: "Sprinkle mozzarella cheese on half of the egg, then place ham slices on top." },
      { order: 4, description: "Fold the egg in half over the cheese and ham. Cook until cheese melts." },
      { order: 5, description: "Toast bread slices in butter until golden." },
      { order: 6, description: "Place cheddar slices on one piece of toast, add the egg-ham-cheese, then add sauce and top with second slice." },
      { order: 7, description: "Press down gently and cut diagonally." }
    ],
    prep_time: 10,
    cook_time: 12,
    difficulty: "Easy",
    dietary_tags: [],
    image_url: "🧀",
    tips: [
      "Use low moisture mozzarella to prevent sogginess",
      "Let the cheese melt completely before assembling"
    ],
    created_date: "2024-01-02",
    featured: true
  },
  {
    id: "spicy-kimchi-toast",
    title: "Spicy Kimchi Toast",
    description: "A Korean fusion favorite with tangy kimchi and a spicy kick. Bold flavors for adventurous eaters.",
    ingredients: [
      { name: "White bread", amount: "2", unit: "slices" },
      { name: "Eggs", amount: "2", unit: "large" },
      { name: "Kimchi", amount: "1/3", unit: "cup, chopped" },
      { name: "Green onion", amount: "1", unit: "stalk, chopped" },
      { name: "Bacon", amount: "2", unit: "strips" },
      { name: "Butter", amount: "2", unit: "tablespoons" },
      { name: "Gochugaru", amount: "1", unit: "teaspoon" },
      { name: "Sugar", amount: "1/2", unit: "teaspoon" },
      { name: "Mayonnaise", amount: "2", unit: "tablespoons" },
      { name: "Sriracha", amount: "1", unit: "teaspoon" }
    ],
    instructions: [
      { order: 1, description: "Cook bacon until crispy. Set aside." },
      { order: 2, description: "Squeeze excess liquid from kimchi and chop finely." },
      { order: 3, description: "Beat eggs with kimchi, green onion, gochugaru, and sugar." },
      { order: 4, description: "Cook egg mixture in butter until just set." },
      { order: 5, description: "Toast bread slices." },
      { order: 6, description: "Mix mayonnaise with sriracha for spicy mayo." },
      { order: 7, description: "Layer bacon on toast, add egg mixture, spread spicy mayo, and top with second slice." }
    ],
    prep_time: 12,
    cook_time: 15,
    difficulty: "Medium",
    dietary_tags: ["spicy"],
    image_url: "🌶️",
    tips: [
      "Squeeze kimchi well to prevent soggy bread",
      "Adjust gochugaru for desired spice level"
    ],
    created_date: "2024-01-03",
    featured: false
  },
  {
    id: "vegetarian-toast",
    title: "Vegetarian Gilgeori Toast",
    description: "All the flavor of classic street toast without the meat. Packed with vegetables and just as satisfying.",
    ingredients: [
      { name: "White bread", amount: "2", unit: "slices" },
      { name: "Eggs", amount: "3", unit: "large" },
      { name: "Cabbage", amount: "1/3", unit: "cup, shredded" },
      { name: "Carrot", amount: "3", unit: "tablespoons, julienned" },
      { name: "Bell pepper", amount: "1/4", unit: "cup, diced" },
      { name: "Green onion", amount: "2", unit: "stalks, chopped" },
      { name: "Mushrooms", amount: "1/4", unit: "cup, sliced" },
      { name: "Butter", amount: "2", unit: "tablespoons" },
      { name: "Sugar", amount: "1", unit: "teaspoon" },
      { name: "Salt", amount: "1/4", unit: "teaspoon" },
      { name: "Black pepper", amount: "1/4", unit: "teaspoon" },
      { name: "Ketchup", amount: "2", unit: "tablespoons" },
      { name: "Mayonnaise", amount: "1", unit: "tablespoon" }
    ],
    instructions: [
      { order: 1, description: "Beat eggs with all vegetables, sugar, salt, and pepper." },
      { order: 2, description: "Heat pan with butter and pour egg-vegetable mixture, spreading into a rectangle." },
      { order: 3, description: "Cook until bottom is set, then carefully flip. Cook other side." },
      { order: 4, description: "Toast bread slices in butter." },
      { order: 5, description: "Mix ketchup and mayo for sauce." },
      { order: 6, description: "Place egg on one slice, spread sauce, top with second slice." },
      { order: 7, description: "Cut and serve immediately." }
    ],
    prep_time: 15,
    cook_time: 12,
    difficulty: "Easy",
    dietary_tags: ["vegetarian"],
    image_url: "🥬",
    tips: [
      "Don't skip the sugar - it balances the flavors",
      "Extra egg makes up for the missing protein from meat"
    ],
    created_date: "2024-01-04",
    featured: false
  },
  {
    id: "bulgogi-toast",
    title: "Bulgogi Beef Toast",
    description: "Elevate your toast with sweet and savory bulgogi beef. A hearty, protein-packed Korean sandwich.",
    ingredients: [
      { name: "White bread", amount: "2", unit: "slices" },
      { name: "Eggs", amount: "2", unit: "large" },
      { name: "Thinly sliced beef", amount: "100", unit: "grams" },
      { name: "Cabbage", amount: "1/4", unit: "cup, shredded" },
      { name: "Carrot", amount: "2", unit: "tablespoons, julienned" },
      { name: "Soy sauce", amount: "1", unit: "tablespoon" },
      { name: "Sugar", amount: "1", unit: "tablespoon" },
      { name: "Sesame oil", amount: "1", unit: "teaspoon" },
      { name: "Garlic", amount: "1", unit: "clove, minced" },
      { name: "Butter", amount: "2", unit: "tablespoons" },
      { name: "Mayonnaise", amount: "2", unit: "tablespoons" }
    ],
    instructions: [
      { order: 1, description: "Marinate beef in soy sauce, sugar, sesame oil, and garlic for 15 minutes." },
      { order: 2, description: "Cook marinated beef in a hot pan until caramelized. Set aside." },
      { order: 3, description: "Beat eggs with cabbage and carrot." },
      { order: 4, description: "Cook egg mixture in butter until set." },
      { order: 5, description: "Toast bread slices." },
      { order: 6, description: "Layer bulgogi beef on toast, top with egg, spread mayo, and cover with second slice." },
      { order: 7, description: "Cut diagonally and serve hot." }
    ],
    prep_time: 20,
    cook_time: 15,
    difficulty: "Medium",
    dietary_tags: [],
    image_url: "🥩",
    tips: [
      "Freeze beef slightly before slicing for thinner cuts",
      "Don't overcrowd the pan when cooking beef"
    ],
    created_date: "2024-01-05",
    featured: true
  },
  {
    id: "tuna-mayo-toast",
    title: "Tuna Mayo Korean Toast",
    description: "A lighter option with creamy tuna salad. Popular in Korean convenience stores and cafes.",
    ingredients: [
      { name: "White bread", amount: "2", unit: "slices" },
      { name: "Eggs", amount: "2", unit: "large" },
      { name: "Canned tuna", amount: "1", unit: "can, drained" },
      { name: "Cabbage", amount: "1/4", unit: "cup, shredded" },
      { name: "Corn", amount: "2", unit: "tablespoons" },
      { name: "Mayonnaise", amount: "3", unit: "tablespoons" },
      { name: "Butter", amount: "2", unit: "tablespoons" },
      { name: "Sugar", amount: "1/2", unit: "teaspoon" },
      { name: "Salt", amount: "1/4", unit: "teaspoon" },
      { name: "Black pepper", amount: "1/4", unit: "teaspoon" }
    ],
    instructions: [
      { order: 1, description: "Mix tuna with 2 tablespoons mayo, corn, and black pepper. Set aside." },
      { order: 2, description: "Beat eggs with cabbage, sugar, and salt." },
      { order: 3, description: "Cook egg mixture in butter." },
      { order: 4, description: "Toast bread slices." },
      { order: 5, description: "Spread tuna mixture on one slice of toast." },
      { order: 6, description: "Top with egg, add remaining mayo, and cover with second slice." },
      { order: 7, description: "Cut and serve." }
    ],
    prep_time: 10,
    cook_time: 10,
    difficulty: "Easy",
    dietary_tags: [],
    image_url: "🐟",
    tips: [
      "Use tuna packed in water for a lighter option",
      "Add diced cucumber for extra crunch"
    ],
    created_date: "2024-01-06",
    featured: false
  }
];
