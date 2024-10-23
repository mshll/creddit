import React from 'react';
import PostList from '@/components/PostList';
import Modal from '@/components/Modal';

function PostsPage() {
  return (
    <div className="flex items-start h-full flex-1 text-start flex-col mt-10 mx-auto container gap-6 p-4">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-bold text-4xl">Posts</h1>
        <Modal />
      </div>
      <PostList />
    </div>
  );
}

export default PostsPage;
