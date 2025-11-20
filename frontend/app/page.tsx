"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Book, Utensils, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes, techniques } from "@/lib/data";

export default function Home() {
  const featuredRecipes = recipes.filter((recipe) => recipe.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl md:text-8xl mb-6">🥪</div>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Korean Egg Toast
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover the delicious world of Gilgeori Toast - Korea's beloved
              street food sandwich. Learn authentic recipes, master cooking
              techniques, and explore creative variations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/recipes">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Browse Recipes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/techniques">
                <Button size="lg" variant="outline">
                  Learn Techniques
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-gray-600 text-lg">
              Start with these popular Korean egg toast recipes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/recipes">
              <Button variant="outline" size="lg">
                View All Recipes
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive guides to master Korean egg toast
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Recipes Card */}
            <Link href="/recipes">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Recipes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {recipes.length} authentic and modern recipes to try
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Ingredients Card */}
            <Link href="/ingredients">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ingredients
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete guide to ingredients and substitutions
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Techniques Card */}
            <Link href="/techniques">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Techniques
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {techniques.length} step-by-step cooking techniques
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Variations Card */}
            <Link href="/variations">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Variations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Creative twists and dietary adaptations
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
              About Korean Egg Toast
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Korean egg toast, known as <strong>Gilgeori Toast</strong> or{" "}
                <strong>Street Toast</strong>, is one of Korea's most beloved
                street food items. It originated from street vendors and has
                become a staple breakfast and snack across the country.
              </p>
              <p>
                What makes Korean egg toast special is the unique way vegetables
                are mixed directly into the scrambled eggs, creating a fluffy,
                savory base. Combined with toasted bread and a sweet-savory
                sauce, it's a perfect balance of flavors and textures that has
                captured hearts worldwide.
              </p>
              <p>
                Whether you're craving a quick breakfast, a satisfying snack, or
                want to explore Korean cuisine, this website will guide you
                through everything you need to know to make authentic and
                delicious Korean egg toast at home.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link href="/recipes">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Start Cooking
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Save Your Favorite Recipes
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Click the heart icon on any recipe to save it to your favorites
          </p>
          <Link href="/favorites">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-gray-100"
            >
              View My Favorites
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
