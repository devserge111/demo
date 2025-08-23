import React from 'react';

const InputFields = ({
  businessType,
  setBusinessType,
  campaignGoal,
  setCampaignGoal,
  toneOfVoice,
  setToneOfVoice,
  visualStyle,
  setVisualStyle,
  targetAudience,
  setTargetAudience,
  textLength,
  setTextLength,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Business Type</label>
        <select
          id="businessType"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        >
          <option value="">Select Business Type</option>
          <option value="ecommerce">E-commerce</option>
          <option value="restaurant">Restaurant</option>
          <option value="saas">SaaS</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="campaignGoal" className="block text-sm font-medium text-gray-700">Campaign Goal</label>
        <select
          id="campaignGoal"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={campaignGoal}
          onChange={(e) => setCampaignGoal(e.target.value)}
        >
          <option value="">Select Campaign Goal</option>
          <option value="awareness">Brand Awareness</option>
          <option value="engagement">Engagement</option>
          <option value="sales">Sales</option>
        </select>
      </div>

      <div>
        <label htmlFor="toneOfVoice" className="block text-sm font-medium text-gray-700">Tone of Voice</label>
        <select
          id="toneOfVoice"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={toneOfVoice}
          onChange={(e) => setToneOfVoice(e.target.value)}
        >
          <option value="">Select Tone of Voice</option>
          <option value="formal">Formal</option>
          <option value="informal">Informal</option>
          <option value="humorous">Humorous</option>
        </select>
      </div>

      <div>
        <label htmlFor="visualStyle" className="block text-sm font-medium text-gray-700">Visual Style</label>
        <select
          id="visualStyle"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={visualStyle}
          onChange={(e) => setVisualStyle(e.target.value)}
        >
          <option value="">Select Visual Style</option>
          <option value="minimalist">Minimalist</option>
          <option value="modern">Modern</option>
          <option value="vintage">Vintage</option>
        </select>
      </div>

      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="textLength" className="block text-sm font-medium text-gray-700">Text Length (words)</label>
        <input
          type="range"
          id="textLength"
          min="20"
          max="150"
          value={textLength}
          onChange={(e) => setTextLength(parseInt(e.target.value))}
        />
        <span className="text-sm text-gray-500">{textLength} words</span>
      </div>
    </div>
  );
};

export default InputFields;
