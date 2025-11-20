"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { IngredientCard } from "@/components/IngredientCard";
import { ingredients } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function IngredientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    ingredients.forEach((ingredient) => {
      cats.add(ingredient.category);
    });
    return Array.from(cats).sort();
  }, []);

  // Filter ingredients
  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ingredient) => {
      const matchesSearch =
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ingredient.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || ingredient.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  // Group by category for display
  const groupedIngredients = useMemo(() => {
    const grouped: Record<string, typeof ingredients> = {};
    filteredIngredients.forEach((ingredient) => {
      if (!grouped[ingredient.category]) {
        grouped[ingredient.category] = [];
      }
      grouped[ingredient.category].push(ingredient);
    });
    return grouped;
  }, [filteredIngredients]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-2">
            Ingredients Guide
          </h1>
          <p className="text-gray-600">
            Learn about the essential ingredients for Korean egg sandwiches
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search ingredients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredIngredients.length} of {ingredients.length}{" "}
            ingredients
          </p>
        </div>

        {/* Ingredients by Category */}
        {Object.keys(groupedIngredients).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedIngredients).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((ingredient) => (
                    <IngredientCard key={ingredient.id} ingredient={ingredient} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 mb-2">No ingredients found</p>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
