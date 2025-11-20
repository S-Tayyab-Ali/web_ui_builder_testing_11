"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TechniqueCard } from "@/components/TechniqueCard";
import { techniques } from "@/lib/data";

export default function TechniquesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter techniques
  const filteredTechniques = useMemo(() => {
    return techniques.filter((technique) => {
      const matchesSearch =
        technique.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        technique.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Cooking Techniques
          </h1>
          <p className="text-gray-600">
            Master the essential techniques for perfect Korean egg toast
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search techniques..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredTechniques.length} of {techniques.length} techniques
          </p>
        </div>

        {/* Techniques Grid */}
        {filteredTechniques.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechniques.map((technique) => (
              <TechniqueCard key={technique.id} technique={technique} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 mb-2">No techniques found</p>
            <p className="text-gray-400">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
