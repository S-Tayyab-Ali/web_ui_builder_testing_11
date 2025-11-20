"use client";

import React from "react";
import Link from "next/link";
import { ChefHat, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Variation } from "@/lib/types";

interface VariationCardProps {
  variation: Variation;
}

export function VariationCard({ variation }: VariationCardProps) {
  return (
    <Link href={`/variations/${variation.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
          {variation.image_url}
        </div>
        <CardContent className="pt-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-xl line-clamp-2">{variation.name}</h3>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {variation.description}
          </p>
          <div className="flex flex-wrap gap-2">
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
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex items-center text-sm text-purple-600">
            View Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
