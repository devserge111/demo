// src/pages/Index.tsx
// Variant templates for different types of apps
import { installRuntimeReporter } from "@/runtime-reporter";
// Inject the reporter — projectId is usually injected at build/deploy time
//@ts-ignore
installRuntimeReporter(import.meta.env.VITE_PROJECT_ID || "unknown");

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Sparkles, Plus, Rocket, Clock, TrendingUp, Layers, Search } from "lucide-react";

// Template data variants for different app types
const templateSets = {
  general: [
    { title: "Starter Layout", category: "UI", description: "Clean shell for pages", tags: ["layout", "shell"] },
    { title: "CRUD Module", category: "Data", description: "List, create, edit, delete", tags: ["crud", "forms"] },
    { title: "Auth Screens", category: "Auth", description: "Sign in / Sign up / Reset", tags: ["auth", "ui"] },
    { title: "Analytics Panel", category: "Insights", description: "Charts & metrics", tags: ["charts", "dashboard"] },
  ],
  ecommerce: [
    { title: "Product Grid", category: "Shop", description: "Grid display for products", tags: ["shop", "catalog"] },
    { title: "Checkout Flow", category: "Shop", description: "Cart, payment, confirmation", tags: ["checkout", "payments"] },
    { title: "Landing Hero", category: "Marketing", description: "Hero banner with CTA", tags: ["hero", "cta"] },
    { title: "Promo Banner", category: "Marketing", description: "Highlight discounts", tags: ["promo", "banner"] },
  ],
  saas: [
    { title: "Dashboard Overview", category: "UI", description: "KPIs and charts", tags: ["dashboard", "stats"] },
    { title: "Team Management", category: "Admin", description: "Invite and manage users", tags: ["team", "admin"] },
    { title: "Billing Settings", category: "Account", description: "Manage subscriptions", tags: ["billing", "plans"] },
    { title: "API Keys Panel", category: "Developer", description: "Generate & manage keys", tags: ["api", "developer"] },
  ],
};

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

function TemplateCard({ title, category, description, tags }: any) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Badge variant="secondary">{category}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((t: string) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Index() {
  const [activeTab, setActiveTab] = useState("overview");
  const [appType, setAppType] = useState<keyof typeof templateSets>("general");

  const templates = templateSets[appType];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Universal App Starter</h1>
              <p className="mb-4">Switch between template sets for different application types.</p>
              <Select value={appType} onValueChange={(v) => setAppType(v as keyof typeof templateSets)}>
                <SelectTrigger className="w-60 mx-auto">
                  <SelectValue placeholder="Select App Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="ecommerce">E-Commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((t) => (
                <TemplateCard key={t.title} {...t} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
