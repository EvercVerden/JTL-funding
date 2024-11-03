"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Share Your Idea",
    description: "Present your creative project to our supportive community."
  },
  {
    icon: Target,
    title: "Set Your Goal",
    description: "Define your funding target and project timeline."
  },
  {
    icon: Users,
    title: "Get Backed",
    description: "Receive support from backers who believe in your vision."
  },
  {
    icon: Rocket,
    title: "Make It Happen",
    description: "Bring your project to life with the funds you've raised."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Turn your creative ideas into reality in four simple steps
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}