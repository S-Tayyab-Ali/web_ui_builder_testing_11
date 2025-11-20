"use client";

import React from "react";
import Link from "next/link";
import { Clock, ChefHat } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Technique } from "@/lib/types";

interface TechniqueCardProps {
  technique: Technique;
}

export function TechniqueCard({ technique }: TechniqueCardProps) {
  return (
    <Link href={`/techniques/${technique.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CardContent className="pt-6">
          <h3 className="font-bold text-xl mb-2">{technique.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {technique.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge
              variant={
                technique.difficulty === "Easy"
                  ? "secondary"
                  : technique.difficulty === "Medium"
                  ? "outline"
                  : "destructive"
              }
            >
              <ChefHat className="w-3 h-3 mr-1" />
              {technique.difficulty}
            </Badge>
            <Badge variant="outline">
              {technique.steps.length} steps
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            ~{technique.estimated_time} mins
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
