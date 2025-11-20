"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");

  // Get unique dietary tags
  const dietaryTags = useMemo(() => {
    const tags = new Set<string>();
    recipes.forEach((recipe) => {
      recipe.dietary_tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter recipes
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDifficulty =
        difficultyFilter === "all" || recipe.difficulty === difficultyFilter;

      const matchesDietary =
        dietaryFilter === "all" ||
        recipe.dietary_tags.includes(dietaryFilter) ||
        (dietaryFilter === "none" && recipe.dietary_tags.length === 0);

      return matchesSearch && matchesDifficulty && matchesDietary;
    });
  }, [searchTerm, difficultyFilter, dietaryFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">
            Korean Egg Toast Recipes
          </h1>
          <p className="text-gray-600">
            Discover authentic and modern variations of Korean street toast
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dietary Filter */}
            <div>
              <Select value={dietaryFilter} onValueChange={setDietaryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Dietary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="none">No Special Tags</SelectItem>
                  {dietaryTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(difficultyFilter !== "all" || dietaryFilter !== "all" || searchTerm) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary">
                  Search: {searchTerm}
                </Badge>
              )}
              {difficultyFilter !== "all" && (
                <Badge variant="secondary">
                  {difficultyFilter}
                </Badge>
              )}
              {dietaryFilter !== "all" && (
                <Badge variant="secondary">
                  {dietaryFilter === "none" ? "No tags" : dietaryFilter}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredRecipes.length} of {recipes.length} recipes
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 mb-2">No recipes found</p>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
