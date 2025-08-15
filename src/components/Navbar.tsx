import { Button } from "@/components/ui/button";
export default function Navbar(){
  return (
    <header className="border-b bg-background/60 backdrop-blur">
      <div className="max-w-5xl mx-auto h-14 px-4 flex items-center gap-3">
        <a href="/" className="font-bold">App</a>
        <nav className="ml-auto flex items-center gap-2">
          <a className="underline text-primary" href="/">Home</a>
          <Button asChild><a href="/settings">Settings</a></Button>
        </nav>
      </div>
    </header>
  );
}
