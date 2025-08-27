import React from 'react';

interface PostPreviewProps {
  ideas: string[];
}

const PostPreview: React.FC<PostPreviewProps> = ({ ideas }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Post Preview</h2>
      {ideas.map((idea, index) => (
        <div key={index} className="border p-4 rounded-md mb-2">
          <p>{idea}</p>
          <p className="text-sm text-gray-500">Facebook Preview</p>
          <p className="text-sm text-gray-500">Instagram Preview</p>
        </div>
      ))}
    </div>
  );
};

export default PostPreview;
