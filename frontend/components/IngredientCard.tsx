"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ingredient } from "@/lib/types";

interface IngredientCardProps {
  ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <Link href={`/ingredients/${ingredient.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl">
          {ingredient.image_url}
        </div>
        <CardContent className="pt-4">
          <h3 className="font-bold text-xl mb-2">{ingredient.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {ingredient.description}
          </p>
          <Badge variant="outline">{ingredient.category}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
