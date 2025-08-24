import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover } from "@/components/ui/popover";
import { PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export default function Features() {
  const [toneOfVoice, setToneOfVoice] = useState('');
  const [textLength, setTextLength] = useState('');
  const [visualStyle, setVisualStyle] = useState('');
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Tone of Voice:', toneOfVoice);
    console.log('Text Length:', textLength);
    console.log('Visual Style:', visualStyle);
    console.log('Scheduled Date:', date);
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Customize Your Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <Label htmlFor="toneOfVoice">Tone of Voice</Label>
              <Input
                type="text"
                id="toneOfVoice"
                value={toneOfVoice}
                onChange={(e) => setToneOfVoice(e.target.value)}
                placeholder="e.g., Professional, Humorous"
              />
            </div>
            <div>
              <Label htmlFor="textLength">Text Length</Label>
              <Input
                type="text"
                id="textLength"
                value={textLength}
                onChange={(e) => setTextLength(e.target.value)}
                placeholder="e.g., Short, Medium, Long"
              />
            </div>
            <div>
              <Label htmlFor="visualStyle">Visual Style</Label>
              <Input
                type="text"
                id="visualStyle"
                value={visualStyle}
                onChange={(e) => setVisualStyle(e.target.value)}
                placeholder="e.g., Minimalist, Bold, Colorful"
              />
            </div>
            <div>
              <Label>Schedule Post</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[240px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='center'>
                  <Calendar mode='single' selected={date} onSelect={setDate} className='rounded-md border shadow-sm' />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit">Apply Customizations</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
