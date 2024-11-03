"use client";

import { Card } from "@/components/ui/card";
import { Palette, Leaf, Cpu, Music, Camera, Book, Coffee, Heart } from "lucide-react";

const categories = [
  { icon: Palette, name: "Art & Design", count: 2453 },
  { icon: Leaf, name: "Sustainability", count: 1876 },
  { icon: Cpu, name: "Technology", count: 3241 },
  { icon: Music, name: "Music", count: 1543 },
  { icon: Camera, name: "Film & Video", count: 987 },
  { icon: Book, name: "Publishing", count: 765 },
  { icon: Coffee, name: "Food & Craft", count: 1234 },
  { icon: Heart, name: "Community", count: 2198 }
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Explore Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover projects across different categories and find the ones that
              resonate with your interests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="p-6 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count.toLocaleString()} projects
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}