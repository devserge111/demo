// src/pages/Index.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { Sparkles, Rocket, Search } from "lucide-react";
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Features from '@/components/Features';
import { Label } from "@/components/ui/label";

function LandingSection({ title, description, ctaText, imageUrl }: any) {
  return (
    <section className="landing-section">
      <div className="container">
        <div className="text-container">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-6">{description}</p>
          <Button>{ctaText}</Button>
        </div>
        <img src={imageUrl} alt={title} className="rounded-lg shadow-md" />
      </div>
    </section>
  );
}

function SignUpForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </CardContent>
    </Card>
  );
}

function SignInForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <Button type="submit">Sign In</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function Index() {
  const [activeTab, setActiveTab] = useState("landing");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="landing">Landing</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="auth">Auth</TabsTrigger>
          </TabsList>

          <TabsContent value="landing">
            <LandingSection
              title="Engage Your Audience"
              description="Create captivating social media posts effortlessly."
              ctaText="Get Started Now"
              imageUrl="https://via.placeholder.com/600x400"
            />
            <LandingSection
              title="Automate Your Content"
              description="Schedule posts and analyze performance with ease."
              ctaText="Learn More"
              imageUrl="https://via.placeholder.com/600x400"
            />
            <LandingSection
              title="Customize Your Brand"
              description="Tailor your posts to match your unique brand voice."
              ctaText="Explore Features"
              imageUrl="https://via.placeholder.com/600x400"
            />
            <LandingSection
              title="Drive Results"
              description="Track engagement and optimize your social media strategy."
              ctaText="View Analytics"
              imageUrl="https://via.placeholder.com/600x400"
            />
          </TabsContent>

          <TabsContent value="home">
            <Home />
          </TabsContent>

          <TabsContent value="features">
            <Features />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="auth">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SignUpForm />
              <SignInForm />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}