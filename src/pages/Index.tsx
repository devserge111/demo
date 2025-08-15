import Navbar from "@/components/Navbar";

export default function Index(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-muted-foreground">This app was generated automatically.</p>
      </main>
    </div>
  );
}
