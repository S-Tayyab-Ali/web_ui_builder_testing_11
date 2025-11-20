"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Clock, ChefHat, Heart, Printer, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { recipes } from "@/lib/data";
import Link from "next/link";

export default function RecipeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const recipeId = params.id as string;
  const recipe = recipes.find((r) => r.id === recipeId);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if recipe is in favorites
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(recipeId));
  }, [recipeId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== recipeId);
    } else {
      newFavorites = [...favorites, recipeId];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe?.title,
          text: recipe?.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Recipe not found
          </h1>
          <Button onClick={() => router.push("/recipes")}>
            Back to Recipes
          </Button>
        </div>
      </div>
    );
  }

  const totalTime = recipe.prep_time + recipe.cook_time;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 print:hidden"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-9xl">
            {recipe.image_url}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
                  {recipe.title}
                </h1>
                <p className="text-gray-600 text-lg">{recipe.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 print:hidden">
                <Button
                  variant={isFavorite ? "default" : "outline"}
                  size="icon"
                  onClick={toggleFavorite}
                  className={isFavorite ? "bg-red-500 hover:bg-red-600" : ""}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </Button>
                <Button variant="outline" size="icon" onClick={handlePrint}>
                  <Printer className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleShare}>
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <div className="text-sm">
                  <span className="font-semibold">Prep:</span> {recipe.prep_time}
                  m
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <div className="text-sm">
                  <span className="font-semibold">Cook:</span> {recipe.cook_time}
                  m
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-amber-600" />
                <div className="text-sm">
                  <span className="font-semibold">Total:</span> {totalTime}m
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={
                  recipe.difficulty === "Easy"
                    ? "secondary"
                    : recipe.difficulty === "Medium"
                    ? "outline"
                    : "destructive"
                }
              >
                {recipe.difficulty}
              </Badge>
              {recipe.dietary_tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
              {recipe.featured && (
                <Badge className="bg-amber-500 hover:bg-amber-600">
                  Featured
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <span className="font-semibold">
                          {ingredient.amount} {ingredient.unit}
                        </span>{" "}
                        {ingredient.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tips */}
            {recipe.tips.length > 0 && (
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">
                    Pro Tips
                  </h2>
                  <ul className="space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-500 mr-2 font-bold">
                          💡
                        </span>
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">
                  Instructions
                </h2>
                <div className="space-y-6">
                  {recipe.instructions.map((instruction) => (
                    <div key={instruction.order} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center">
                        {instruction.order}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          {instruction.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 print:hidden">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-amber-900 mb-4">
                Explore More
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/ingredients">
                  <Button variant="outline">View Ingredients Guide</Button>
                </Link>
                <Link href="/techniques">
                  <Button variant="outline">Learn Techniques</Button>
                </Link>
                <Link href="/variations">
                  <Button variant="outline">Discover Variations</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
