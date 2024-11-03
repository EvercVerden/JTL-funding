import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sustainable Urban Farming Kit",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3",
    progress: 75,
    raised: "¥750,000",
    goal: "¥1,000,000",
    daysLeft: 12
  },
  {
    id: 2,
    title: "AI-Powered Music Creation Tool",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
    progress: 45,
    raised: "¥450,000",
    goal: "¥1,000,000",
    daysLeft: 25
  },
  {
    id: 3,
    title: "Handcrafted Leather Accessories",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
    progress: 90,
    raised: "¥900,000",
    goal: "¥1,000,000",
    daysLeft: 5
  },
  // Add more projects as needed
];

export default function Discover() {
  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Discover Projects
            </h1>
            <p className="text-muted-foreground">
              Explore innovative projects from creators around the world
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
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
                  <div className="mt-4 flex justify-between text-sm">
                    <span>Goal: {project.goal}</span>
                    <span>{project.daysLeft} days left</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}