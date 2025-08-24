import React from 'react';
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

interface InstagramPreviewProps {
  content: string;
}

export default function InstagramPreview({ content }: InstagramPreviewProps) {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col">
          <span className="font-bold">Instagram Preview</span>
          <p>{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}