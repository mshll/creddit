import { deletePost, fetchPostById } from '@/actions';
import PostDetail from '@/components/PostDetail';
import React from 'react';

async function PostDetailPage({ params }) {
  const { id } = await params;
  const post = await fetchPostById(id);

  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) deletePost(id);
  };

  return <PostDetail post={post} />;
}

export default PostDetailPage;
