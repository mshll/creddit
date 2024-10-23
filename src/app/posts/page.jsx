import React from 'react';
import PostList from '@/components/PostList';

function PostsPage() {
  return (
    <div className="flex items-start h-full flex-1 text-center flex-col mt-10 mx-auto container gap-6">
      <h1 className="font-bold text-4xl">Posts</h1>
      <PostList />
    </div>
  );
}

export default PostsPage;
