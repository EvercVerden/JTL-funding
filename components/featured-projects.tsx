"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    id: 1,
    title: "Eco-friendly Urban Garden Solutions",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    progress: 85,
    raised: "¥850,000",
    goal: "¥1,000,000",
    daysLeft: 15
  },
  {
    id: 2,
    title: "Next-Gen Smart Home Assistant",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    progress: 62,
    raised: "¥620,000",
    goal: "¥1,000,000",
    daysLeft: 23
  },
  {
    id: 3,
    title: "Artisanal Coffee Subscription",
    category: "Food",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    progress: 45,
    raised: "¥450,000",
    goal: "¥1,000,000",
    daysLeft: 30
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <Badge variant="secondary" className="text-sm">
              View All Projects →
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <Progress value={project.progress} className="h-2 mb-4" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.raised} raised</span>
                    <span>{project.progress}%</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between text-sm">
                  <span>Goal: {project.goal}</span>
                  <span>{project.daysLeft} days left</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}