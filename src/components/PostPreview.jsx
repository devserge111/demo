import React from 'react';

const PostPreview = ({ platform, postContent, Icon }) => {
  return (
    <div className="border p-4 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {platform} Preview
      </h3>
      <p className="text-gray-700">{postContent || 'No post generated yet.'}</p>
    </div>
  );
};

export default PostPreview;
