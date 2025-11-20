"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/techniques", label: "Techniques" },
  { href: "/variations", label: "Variations" },
  { href: "/favorites", label: "Favorites" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🥪</span>
            <span className="text-xl font-bold text-amber-900">
              Korean Egg Toast
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-amber-100 text-amber-900"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                }`}
              >
                {link.label === "Favorites" && (
                  <Heart className="inline-block w-4 h-4 mr-1 mb-0.5" />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-amber-100 text-amber-900"
                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                    }`}
                  >
                    {link.label === "Favorites" && (
                      <Heart className="inline-block w-4 h-4 mr-2 mb-0.5" />
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
