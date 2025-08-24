export const generatePost = (businessType: string, targetAudience: string, campaignGoal: string) => {
  const postIdeas = [
    `[${businessType}] New post idea for [${targetAudience}] about [${campaignGoal}].`,
    `Another post idea for [${businessType}] targeting [${targetAudience}] to achieve [${campaignGoal}].`,
    `Engaging content suggestion for [${businessType}] audience [${targetAudience}] focused on [${campaignGoal}].`,
  ];

  const captions = [
    `Check out this amazing offer for our [${targetAudience}]! [${campaignGoal}] at [${businessType}].`,
    `We're excited to announce our new [${campaignGoal}] for [${targetAudience}] at [${businessType}].`,
    `Don't miss out! [${campaignGoal}] is here for our valued [${targetAudience}] at [${businessType}].`,
  ];

  const hashtags = [
    `#[${businessType.replace(/\s/g, '')}]`, `#${targetAudience.replace(/\s/g, '')}`, `#${campaignGoal.replace(/\s/g, '')}`, '#socialmedia', '#marketing'
  ];

  const imageSuggestions = [
    'Image of happy customers using your product.',
    'Behind-the-scenes video of your team working.',
    'Eye-catching graphic promoting your latest offer.',
  ];

  const videoSuggestions = [
    'Short video showcasing your product benefits.',
    'Customer testimonial video.',
    'Animated explainer video about your services.',
  ];

  return {
    postIdeas: postIdeas[Math.floor(Math.random() * postIdeas.length)],
    captions: captions[Math.floor(Math.random() * captions.length)],
    hashtags: hashtags.join(' '),
    imageSuggestions: imageSuggestions[Math.floor(Math.random() * imageSuggestions.length)],
    videoSuggestions: videoSuggestions[Math.floor(Math.random() * videoSuggestions.length)],
  };
};
