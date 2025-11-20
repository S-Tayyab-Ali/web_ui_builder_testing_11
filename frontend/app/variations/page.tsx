"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VariationCard } from "@/components/VariationCard";
import { variations } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VariationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Filter variations
  const filteredVariations = useMemo(() => {
    return variations.filter((variation) => {
      const matchesSearch =
        variation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        variation.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = typeFilter === "all" || variation.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [searchTerm, typeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">
            Recipe Variations
          </h1>
          <p className="text-gray-600">
            Explore creative variations and modern twists on classic Korean egg
            toast
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
                  placeholder="Search variations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Traditional">Traditional</SelectItem>
                  <SelectItem value="Modern">Modern</SelectItem>
                  <SelectItem value="Dietary">Dietary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredVariations.length} of {variations.length} variations
          </p>
        </div>

        {/* Variations Grid */}
        {filteredVariations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVariations.map((variation) => (
              <VariationCard key={variation.id} variation={variation} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 mb-2">No variations found</p>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
