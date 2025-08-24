import React from 'react';
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

interface FacebookPreviewProps {
  content: string;
}

export default function FacebookPreview({ content }: FacebookPreviewProps) {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col">
          <span className="font-bold">Facebook Preview</span>
          <p>{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
