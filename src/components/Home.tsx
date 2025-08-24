import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { postGenerator } from '@/services/postGenerator';

export default function Home() {
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('');
  const [generatedPosts, setGeneratedPosts] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Business Type:', businessType);
    console.log('Target Audience:', targetAudience);
    console.log('Campaign Goal:', campaignGoal);

    const postData = {
      businessType,
      targetAudience,
      campaignGoal,
    };

    try {
      const posts = await postGenerator(postData);
      setGeneratedPosts(posts);
    } catch (error) {
      console.error("Error generating posts:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Social Media Post Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Input
                type="text"
                id="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="e.g., Restaurant, Clothing Store"
              />
            </div>
            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Textarea
                id="targetAudience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Describe your ideal customer"
              />
            </div>
            <div>
              <Label htmlFor="campaignGoal">Campaign Goal</Label>
              <Select value={campaignGoal} onValueChange={setCampaignGoal}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brandAwareness">Brand Awareness</SelectItem>
                  <SelectItem value="productPromotion">Product Promotion</SelectItem>
                  <SelectItem value="seasonalSale">Seasonal Sale</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Generate Posts</Button>
          </form>

          {generatedPosts.length > 0 && (
            <div className="mt-4">
              <h3>Generated Posts:</h3>
              <ul>
                {generatedPosts.map((post, index) => (
                  <li key={index}>{post}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}