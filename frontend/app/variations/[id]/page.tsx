"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ChefHat, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { variations, recipes } from "@/lib/data";
import Link from "next/link";

export default function VariationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const variationId = params.id as string;
  const variation = variations.find((v) => v.id === variationId);

  // Find the base recipe
  const baseRecipe = variation
    ? recipes.find((r) => r.id === variation.base_recipe_id)
    : null;

  if (!variation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Variation not found
          </h1>
          <Button onClick={() => router.push("/variations")}>
            Back to Variations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-9xl">
            {variation.image_url}
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant={
                    variation.type === "Traditional"
                      ? "default"
                      : variation.type === "Modern"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {variation.type}
                </Badge>
                <Badge
                  variant={
                    variation.difficulty === "Easy"
                      ? "secondary"
                      : variation.difficulty === "Medium"
                      ? "outline"
                      : "destructive"
                  }
                >
                  <ChefHat className="w-3 h-3 mr-1" />
                  {variation.difficulty}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                {variation.name}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {variation.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Key Differences */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-purple-900">
                    What Makes This Unique
                  </h2>
                </div>
                <ul className="space-y-4">
                  {variation.key_differences.map((difference, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {difference}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Base Recipe Link */}
          <div className="lg:col-span-1">
            {baseRecipe && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-purple-900 mb-4">
                    Base Recipe
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    This variation is based on:
                  </p>
                  <Link href={`/recipes/${baseRecipe.id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-5xl">
                        {baseRecipe.image_url}
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-bold text-lg mb-1">
                          {baseRecipe.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {baseRecipe.description}
                        </p>
                        <Button variant="link" className="px-0 mt-2">
                          View Recipe →
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-purple-900 mb-4">
                Explore More
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/variations">
                  <Button variant="outline">View All Variations</Button>
                </Link>
                <Link href="/recipes">
                  <Button variant="outline">Browse Recipes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
