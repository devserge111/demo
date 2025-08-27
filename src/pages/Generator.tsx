import React, { useState } from 'react';
import GeneratorForm from '@/components/GeneratorForm';
import PostIdeas from '@/components/PostIdeas';
import PostPreview from '@/components/PostPreview';
import Scheduling from '@/components/Scheduling';
import appData from '@/lib/appData';
import { t } from '@/lib/i18n';

const Generator: React.FC = () => {
  const dict = appData.ns.i18n.en;
  const [postIdeas, setPostIdeas] = useState<string[]>([]);

  const handleGenerate = (formData: any) => {
    // Placeholder logic to generate post ideas based on form data
    const generatedIdeas = [
      `Check out our new product for ${formData.targetAudience} interested in ${formData.businessType}!`, 
      `Special offer for our ${formData.targetAudience} community. Achieve ${formData.campaignGoal} today!`
    ];
    setPostIdeas(generatedIdeas);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{t(dict, 'generator.title')}</h1>
      <GeneratorForm onGenerate={handleGenerate} />
      {postIdeas.length > 0 && (
        <>
          <PostIdeas ideas={postIdeas} />
          <PostPreview ideas={postIdeas} />
          <Scheduling />
        </>
      )}
    </div>
  );
};

export default Generator;
