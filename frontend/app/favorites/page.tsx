"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteIds(favorites);
  }, []);

  const favoriteRecipes = recipes.filter((recipe) =>
    favoriteIds.includes(recipe.id)
  );

  const clearAllFavorites = () => {
    if (
      window.confirm("Are you sure you want to clear all your favorite recipes?")
    ) {
      localStorage.setItem("favorites", JSON.stringify([]));
      setFavoriteIds([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
              <h1 className="text-4xl font-bold text-red-900">My Favorites</h1>
            </div>
            <p className="text-gray-600">
              Your saved recipes in one convenient place
            </p>
          </div>
          {favoriteRecipes.length > 0 && (
            <Button
              variant="outline"
              onClick={clearAllFavorites}
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Favorites Grid */}
        {favoriteRecipes.length > 0 ? (
          <>
            <div className="mb-4">
              <p className="text-gray-600">
                {favoriteRecipes.length}{" "}
                {favoriteRecipes.length === 1 ? "recipe" : "recipes"} saved
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No favorites yet
            </h2>
            <p className="text-gray-600 mb-6">
              Start exploring recipes and save your favorites by clicking the
              heart icon
            </p>
            <Link href="/recipes">
              <Button>Browse Recipes</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
