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
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Features from '@/components/Features';
import { Label } from "@/components/ui/label";

function HeroSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Engage Your Audience</h1>
        <p className="text-lg text-muted-foreground mb-8">Create captivating social media posts effortlessly.</p>
        <Button size="lg">Get Started Now</Button>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Automated Post Generation"
            description="Generate engaging posts with AI."
            imageUrl="https://via.placeholder.com/150"
          />
          <FeatureCard
            title="Cross-Platform Support"
            description="Optimize content for Facebook and Instagram."
            imageUrl="https://via.placeholder.com/150"
          />
          <FeatureCard
            title="Customization Options"
            description="Tailor your posts to match your brand."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="This app has transformed our social media strategy!"
            author="John Doe"
            imageUrl="https://via.placeholder.com/50"
          />
          <TestimonialCard
            quote="Easy to use and generates great content ideas."
            author="Jane Smith"
            imageUrl="https://via.placeholder.com/50"
          />
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="Free"
            features={["Limited post generation", "Basic analytics"]}
          />
          <PricingCard
            title="Pro"
            price="$19/month"
            features={["Unlimited post generation", "Advanced analytics", "Scheduling"]}
          />
          <PricingCard
            title="Enterprise"
            price="Contact Us"
            features={["Custom solutions", "Dedicated support"]}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Brand</h2>
        <p className="text-lg text-muted-foreground text-center">
          We help businesses create engaging social media content effortlessly.
        </p>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <Button size="lg" variant="secondary">Sign Up Now</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-card text-card-foreground border-t">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 YourApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={imageUrl} alt={title} className="mb-4 rounded-md" />
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageUrl: string;
}

function TestimonialCard({ quote, author, imageUrl }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col items-center">
        <img src={imageUrl} alt={author} className="rounded-full w-16 h-16 mb-4" />
        <p className="text-sm text-muted-foreground text-center italic mb-2">"{quote}"</p>
        <p className="text-sm font-bold">- {author}</p>
      </CardContent>
    </Card>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-2xl font-bold text-center mb-4">{price}</p>
        <ul className="list-disc pl-5 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground">{feature}</li>
          ))}
        </ul>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}

interface IndexProps {
  activeTab?: string;
  initialAuthTab?: 'signin' | 'signup';
}

export default function Index({ activeTab: initialActiveTab, initialAuthTab }: IndexProps = {}) {
  const [activeTab, setActiveTab] = useState(initialActiveTab ? "auth" : initialActiveTab || "landing");
  const [authTab, setAuthTab] = useState(initialAuthTab || 'signin');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="landing">Landing</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="auth">Auth</TabsTrigger>
          </TabsList>

          <TabsContent value="landing">
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <PricingSection />
            <AboutSection />
            <CallToActionSection />
            <Footer />
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
            <Tabs value={authTab} onValueChange={setAuthTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <SignInForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
    </div>
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