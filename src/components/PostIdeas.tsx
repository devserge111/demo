import React from 'react';

interface PostIdeasProps {
  ideas: string[];
}

const PostIdeas: React.FC<PostIdeasProps> = ({ ideas }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Post Ideas</h2>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index} className="mb-2">{idea}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostIdeas;
