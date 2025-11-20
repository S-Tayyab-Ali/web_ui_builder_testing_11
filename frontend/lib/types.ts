export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Array<{
    name: string;
    amount: string;
    unit: string;
  }>;
  instructions: Array<{
    order: number;
    description: string;
  }>;
  prep_time: number;
  cook_time: number;
  difficulty: "Easy" | "Medium" | "Hard";
  dietary_tags: string[];
  image_url: string;
  tips: string[];
  created_date: string;
  featured: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  category: "Vegetables" | "Proteins" | "Sauces" | "Seasonings" | "Bread" | "Other";
  image_url: string;
  where_to_buy: string;
  substitutions: string[];
  created_date: string;
}

export interface Technique {
  id: string;
  name: string;
  description: string;
  steps: Array<{
    order: number;
    description: string;
  }>;
  difficulty: "Easy" | "Medium" | "Hard";
  estimated_time: number;
  tips: string[];
  created_date: string;
}

export interface Variation {
  id: string;
  name: string;
  description: string;
  type: "Traditional" | "Modern" | "Dietary";
  base_recipe_id: string;
  key_differences: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  image_url: string;
  created_date: string;
}
