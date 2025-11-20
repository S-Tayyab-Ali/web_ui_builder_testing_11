"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, ChefHat, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { techniques } from "@/lib/data";
import Link from "next/link";

export default function TechniqueDetailPage() {
  const params = useParams();
  const router = useRouter();
  const techniqueId = params.id as string;
  const technique = techniques.find((t) => t.id === techniqueId);

  if (!technique) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Technique not found
          </h1>
          <Button onClick={() => router.push("/techniques")}>
            Back to Techniques
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {technique.name}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {technique.description}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm">
                <span className="font-semibold">Time:</span>{" "}
                ~{technique.estimated_time} minutes
              </span>
            </div>
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
            <Badge variant="outline">{technique.steps.length} steps</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Step-by-Step Instructions
                </h2>
                <div className="space-y-6">
                  {technique.steps.map((step) => (
                    <div key={step.order} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-lg">
                        {step.order}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-1">
            {technique.tips.length > 0 && (
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    <h2 className="text-xl font-bold text-blue-900">
                      Pro Tips
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {technique.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-500 mr-2 text-lg">💡</span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Continue Learning
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/techniques">
                  <Button variant="outline">View All Techniques</Button>
                </Link>
                <Link href="/recipes">
                  <Button variant="outline">Try Some Recipes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
