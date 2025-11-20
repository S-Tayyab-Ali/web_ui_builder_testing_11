"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ShoppingCart, Replace } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ingredients, recipes } from "@/lib/data";
import Link from "next/link";
import { RecipeCard } from "@/components/RecipeCard";

export default function IngredientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const ingredientId = params.id as string;
  const ingredient = ingredients.find((i) => i.id === ingredientId);

  // Find recipes that use this ingredient
  const relatedRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ing) =>
      ing.name.toLowerCase().includes(ingredient?.name.toLowerCase() || "")
    )
  );

  if (!ingredient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Ingredient not found
          </h1>
          <Button onClick={() => router.push("/ingredients")}>
            Back to Ingredients
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid md:grid-cols-3">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-9xl">
              {ingredient.image_url}
            </div>

            <div className="md:col-span-2 p-6 md:p-8">
              <Badge className="mb-4">{ingredient.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                {ingredient.name}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {ingredient.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Where to Buy & Substitutions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Where to Buy */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl font-bold text-green-900">
                    Where to Buy
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {ingredient.where_to_buy}
                </p>
              </CardContent>
            </Card>

            {/* Substitutions */}
            {ingredient.substitutions.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Replace className="w-5 h-5 text-green-600" />
                    <h2 className="text-xl font-bold text-green-900">
                      Substitutions
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {ingredient.substitutions.map((sub, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Related Recipes */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Recipes Using {ingredient.name}
                </h2>
                {relatedRecipes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedRecipes.map((recipe) => (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No recipes found using this ingredient yet.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Ingredients */}
        <div className="mt-8">
          <Link href="/ingredients">
            <Button variant="outline">View All Ingredients</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
