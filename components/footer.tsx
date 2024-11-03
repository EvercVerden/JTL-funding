import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Modian</h3>
            <p className="text-sm text-muted-foreground">
              A platform for creative projects and innovative ideas.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Stats</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Our Rules</li>
              <li>Creator Resources</li>
              <li>Forward Funds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Modian. All rights reserved.
        </div>
      </div>
    </footer>
  );
}