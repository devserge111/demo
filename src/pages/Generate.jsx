import React, { useState } from 'react';
import InputFields from '../components/InputFields';
import PostPreview from '../components/PostPreview';
import { generateAIPost } from '../utils/aiService';
import { Facebook, Instagram } from '../components/icons';

const Generate = () => {
  const [businessType, setBusinessType] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('');
  const [toneOfVoice, setToneOfVoice] = useState('');
  const [visualStyle, setVisualStyle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [textLength, setTextLength] = useState(50);
  const [facebookPost, setFacebookPost] = useState('');
  const [instagramPost, setInstagramPost] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const aiResponse = await generateAIPost({
        businessType,
        campaignGoal,
        toneOfVoice,
        visualStyle,
        targetAudience,
        textLength,
      });

      setFacebookPost(aiResponse.facebook);
      setInstagramPost(aiResponse.instagram);
    } catch (error) {
      console.error('Error generating AI post:', error);
      // Handle error appropriately, e.g., display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generate AI Posts</h1>
      <InputFields
        businessType={businessType}
        setBusinessType={setBusinessType}
        campaignGoal={campaignGoal}
        setCampaignGoal={setCampaignGoal}
        toneOfVoice={toneOfVoice}
        setToneOfVoice={setToneOfVoice}
        visualStyle={visualStyle}
        setVisualStyle={setVisualStyle}
        targetAudience={targetAudience}
        setTargetAudience={setTargetAudience}
        textLength={textLength}
        setTextLength={setTextLength}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Posts'}
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Post Previews</h2>
        <div className="flex flex-wrap gap-4">
          <PostPreview platform="Facebook" postContent={facebookPost} Icon={Facebook} />
          <PostPreview platform="Instagram" postContent={instagramPost} Icon={Instagram} />
        </div>
      </div>
    </div>
  );
};

export default Generate;
