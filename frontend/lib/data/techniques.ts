import { Technique } from "../types";

export const techniques: Technique[] = [
  {
    id: "perfect-egg-cooking",
    name: "Perfect Korean Toast Eggs",
    description: "Master the technique of cooking fluffy, vegetable-studded eggs that hold together perfectly for Korean toast. The key is mixing vegetables into the eggs and cooking them flat.",
    steps: [
      { order: 1, description: "Crack eggs into a bowl and beat them lightly with a fork or whisk until just combined. Don't over-beat - you want them mixed but not frothy." },
      { order: 2, description: "Add your finely chopped vegetables (cabbage, carrots, green onions) directly to the beaten eggs. This is the secret to Korean street toast!" },
      { order: 3, description: "Season with a pinch of salt and importantly, a small amount of sugar (about 1/2 to 1 teaspoon). The sugar creates the signature sweet-savory balance." },
      { order: 4, description: "Heat a large flat pan or griddle over medium heat. Add butter and let it melt completely, swirling to coat the surface." },
      { order: 5, description: "Pour the egg mixture onto the pan and immediately spread it into a rectangle roughly the size of your bread slices using a spatula." },
      { order: 6, description: "Let it cook undisturbed for 1-2 minutes until the bottom is set and you can see the edges starting to look cooked." },
      { order: 7, description: "If adding protein like ham, place it on top now while the top is still slightly wet - this helps it stick." },
      { order: 8, description: "Using a wide spatula, carefully flip the entire egg rectangle. Cook for another 1-2 minutes until just set. Don't overcook or it becomes rubbery!" },
      { order: 9, description: "Remove from heat. The egg should be slightly soft and tender, not dry or browned." }
    ],
    difficulty: "Medium",
    estimated_time: 10,
    tips: [
      "The vegetables should be cut very small so the eggs hold together well",
      "Medium heat is crucial - too high and the eggs brown before cooking through",
      "Press down gently with your spatula while cooking for a compact, cohesive texture",
      "If the egg breaks when flipping, no worries! Just press it back together with your spatula"
    ],
    created_date: "2024-01-01"
  },
  {
    id: "toast-grilling",
    name: "Golden Toast Grilling",
    description: "Learn how to achieve perfectly golden, crispy toast with a buttery exterior while keeping the inside soft. This technique is essential for authentic Korean street toast.",
    steps: [
      { order: 1, description: "Start with room temperature bread if possible. Cold bread from the fridge can result in uneven toasting." },
      { order: 2, description: "Heat your pan over medium heat. The same pan you used for eggs works great - no need to wash it!" },
      { order: 3, description: "Add about 1 tablespoon of butter to the pan. Let it melt and foam slightly." },
      { order: 4, description: "Place bread slices in the melted butter. Listen for a gentle sizzle - that's the sound you want!" },
      { order: 5, description: "Toast for 2-3 minutes without moving the bread. This allows even browning and crispy texture." },
      { order: 6, description: "Check the underside by lifting a corner with a spatula. You want golden brown color, not dark brown." },
      { order: 7, description: "Flip the bread and toast the other side for another 2-3 minutes." },
      { order: 8, description: "Remove when both sides are evenly golden and crispy. The edges might be slightly darker - that's perfect!" },
      { order: 9, description: "Use immediately while still warm for the best texture and flavor." }
    ],
    difficulty: "Easy",
    estimated_time: 6,
    tips: [
      "Don't skip the butter - it's essential for flavor and that golden crispy exterior",
      "Medium heat prevents burning while ensuring even cooking",
      "Toast both slices at the same time for efficiency",
      "If you prefer less butter, you can brush it on the bread instead of melting in the pan"
    ],
    created_date: "2024-01-01"
  },
  {
    id: "assembly-technique",
    name: "Toast Assembly Master Class",
    description: "Learn the proper way to layer and assemble Korean street toast for the best texture, flavor distribution, and easy eating. The order matters!",
    steps: [
      { order: 1, description: "Prepare your workspace with all components ready: toasted bread, cooked egg, sauce, and any additional ingredients." },
      { order: 2, description: "Place one slice of toasted bread on a cutting board with the more golden side facing down (save the prettier side for the outside)." },
      { order: 3, description: "If using cheese slices, place them on the bread first so they can melt slightly from the heat of the eggs." },
      { order: 4, description: "Carefully transfer the egg and any cooked protein (ham, bacon, etc.) onto the bread. Center it as much as possible." },
      { order: 5, description: "Mix your sauce (typically ketchup and mayo) in a small bowl until well combined and smooth." },
      { order: 6, description: "Spread the sauce evenly over the egg. Don't be shy - the sauce is key to the flavor profile!" },
      { order: 7, description: "Place the second slice of toast on top, golden side facing up." },
      { order: 8, description: "Press down gently but firmly with your palm or a spatula to compress everything together. This helps it hold its shape." },
      { order: 9, description: "Using a sharp knife, cut diagonally from corner to corner to create two triangles. Wipe the knife between cuts for clean edges." },
      { order: 10, description: "Serve immediately while warm. If needed, you can wrap in parchment paper for easier handling, just like street vendors do!" }
    ],
    difficulty: "Easy",
    estimated_time: 5,
    tips: [
      "Work quickly while everything is still warm for the best taste and texture",
      "The pressing step is important - it creates that compact, cohesive sandwich texture",
      "Diagonal cuts are traditional and make it easier to eat",
      "If ingredients slip out while cutting, just push them back in with your knife"
    ],
    created_date: "2024-01-01"
  },
  {
    id: "vegetable-prep",
    name: "Vegetable Preparation for Korean Toast",
    description: "Proper vegetable cutting and preparation techniques ensure even distribution in the eggs and the perfect texture in every bite.",
    steps: [
      { order: 1, description: "Start with fresh, crisp vegetables. Wash and pat them completely dry - excess water will make the eggs watery." },
      { order: 2, description: "For cabbage: Cut a quarter of a small cabbage into very thin shreds, about 1-2mm thick. The thinner the better!" },
      { order: 3, description: "Stack the cabbage shreds and cut across them to make shorter pieces, about 1-2 inches long. You want small pieces that distribute evenly." },
      { order: 4, description: "For carrots: Peel and cut into thin matchsticks (julienne). Aim for pieces about 1/8 inch thick and 1-2 inches long." },
      { order: 5, description: "For green onions: Trim off the root end and any wilted dark green parts. Slice thinly on a slight diagonal." },
      { order: 6, description: "If using bell peppers: Remove seeds and white membrane, then dice into small 1/4 inch pieces." },
      { order: 7, description: "For kimchi (if using): Squeeze out excess liquid firmly with your hands, then chop finely. This prevents soggy eggs." },
      { order: 8, description: "Combine all your prepared vegetables in a bowl before adding to eggs. This ensures even distribution." },
      { order: 9, description: "Use vegetables immediately after cutting for the best texture and flavor." }
    ],
    difficulty: "Easy",
    estimated_time: 8,
    tips: [
      "Smaller pieces distribute better in the eggs and create better texture",
      "Dry vegetables are crucial - pat with paper towels if needed",
      "Prep vegetables before starting to cook so you can work quickly",
      "You can prep vegetables the night before and store in an airtight container"
    ],
    created_date: "2024-01-01"
  },
  {
    id: "sauce-making",
    name: "Perfect Korean Toast Sauce",
    description: "Create the signature sweet-tangy sauce that makes Korean street toast so addictive. The ratio and mixing technique matter!",
    steps: [
      { order: 1, description: "Gather your ingredients: ketchup, mayonnaise, and optionally other add-ins like mustard or hot sauce." },
      { order: 2, description: "The classic ratio is 2 parts ketchup to 1 part mayo (e.g., 2 tablespoons ketchup to 1 tablespoon mayo)." },
      { order: 3, description: "Place both in a small bowl. Don't apply directly to the toast - mixing first creates an emulsion." },
      { order: 4, description: "Whisk together vigorously with a fork or small whisk for about 30 seconds until completely smooth and uniform in color." },
      { order: 5, description: "The mixture should be creamy and light pink/orange in color, with no streaks of red or white." },
      { order: 6, description: "Taste and adjust if needed: add more ketchup for tanginess and sweetness, more mayo for creaminess." },
      { order: 7, description: "For variations: add a tiny squeeze of mustard for depth, or sriracha/gochugaru for heat." },
      { order: 8, description: "Use immediately for the best consistency. If making ahead, store covered in the refrigerator and re-whisk before using." }
    ],
    difficulty: "Easy",
    estimated_time: 3,
    tips: [
      "Japanese Kewpie mayo creates a slightly sweeter, tangier sauce that many prefer",
      "The sauce should be thick enough to spread, not runny",
      "Make extra sauce if you like it really saucy!",
      "This sauce also works great as a dip or spread for other sandwiches"
    ],
    created_date: "2024-01-01"
  }
];
