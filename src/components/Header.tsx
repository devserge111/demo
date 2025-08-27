import { Sparkles, Plus, Rocket, Clock, TrendingUp, Layers, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5" />
          <span className="font-bold">YourApp</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Input placeholder="Search…" className="w-72" />
          <Button variant="secondary"><Search className="mr-2 h-4 w-4" />Search</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Sign in</Button>
          <Button>
            <Sparkles className="mr-2 h-4 w-4" /> Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}