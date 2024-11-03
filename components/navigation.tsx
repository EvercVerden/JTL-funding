"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Modian</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/discover" className="text-sm font-medium">
              Discover
            </Link>
            <Link href="/start-project" className="text-sm font-medium">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-[200px] md:w-[300px]"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          )}

          <div className="hidden md:flex gap-2">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/discover" className="text-lg font-medium">
                  Discover
                </Link>
                <Link href="/start-project" className="text-lg font-medium">
                  Start a Project
                </Link>
                <Button className="w-full">Sign In</Button>
                <Button className="w-full" variant="secondary">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}