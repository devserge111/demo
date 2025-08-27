import React, { useState } from 'react';
import appData from '@/lib/appData';
import { t } from '@/lib/i18n';

interface GeneratorFormProps {
  onGenerate: (formData: any) => void;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate }) => {
  const dict = appData.ns.i18n.en;
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ businessType, targetAudience, campaignGoal });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">{t(dict, 'generator.form.businessType')}</label>
        <input
          type="text"
          id="businessType"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">{t(dict, 'generator.form.targetAudience')}</label>
        <input
          type="text"
          id="targetAudience"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="campaignGoal" className="block text-sm font-medium text-gray-700">{t(dict, 'generator.form.campaignGoal')}</label>
        <input
          type="text"
          id="campaignGoal"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={campaignGoal}
          onChange={(e) => setCampaignGoal(e.target.value)}
        />
      </div>
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {t(dict, 'generator.form.generateButton')}
      </button>
    </form>
  );
};

export default GeneratorForm;
