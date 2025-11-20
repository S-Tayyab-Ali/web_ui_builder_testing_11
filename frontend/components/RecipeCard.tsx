"use client";

import React from "react";
import Link from "next/link";
import { Clock, ChefHat } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/lib/types";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const totalTime = recipe.prep_time + recipe.cook_time;

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
          {recipe.image_url}
        </div>
        <CardContent className="pt-4">
          <h3 className="font-bold text-xl mb-2 line-clamp-2">
            {recipe.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {recipe.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge
              variant={
                recipe.difficulty === "Easy"
                  ? "secondary"
                  : recipe.difficulty === "Medium"
                  ? "outline"
                  : "destructive"
              }
            >
              <ChefHat className="w-3 h-3 mr-1" />
              {recipe.difficulty}
            </Badge>
            {recipe.dietary_tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {totalTime} mins
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
