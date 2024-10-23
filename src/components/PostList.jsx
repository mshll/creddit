import { fetchPosts } from '@/actions';
import Link from 'next/link';
import React from 'react';

async function PostList() {
  const posts = await fetchPosts();

  const postCards = posts.map((post) => (
    <Link
      key={post.id}
      href={`/posts/${post.id}`}
      className="bg-slate-100 px-8 py-10 rounded-lg shadow-md flex flex-col gap-4 justify-start items-start border border-cyan-700/[.2]"
    >
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-sm">{post.description}</p>
    </Link>
  ));

  return <div className="flex gap-6 flex-wrap justify-start items-center w-full">{postCards}</div>;
}

export default PostList;
