import { fetchPosts } from '@/actions';
import Link from 'next/link';
import React from 'react';

async function PostList() {
  const posts = await fetchPosts();

  const maxDesc = 100;
  const maxTitle = 50;
  const postCards = posts.map((post) => {
    const truncatedDescription = post.description.length > maxDesc ? post.description.substring(0, maxDesc) + '...' : post.description;
    const truncatedTitle = post.title.length > maxTitle ? post.title.substring(0, maxTitle) + '...' : post.title;

    return (
      <Link
        key={post.id}
        href={`/posts/${post.id}`}
        className="bg-slate-50 px-8 py-10 rounded-lg w-full shadow-md flex flex-col gap-4 justify-start items-start border border-cyan-700/[.2] hover:scale-95 transition-transform duration-200 flex-1"
      >
        <h2 className="text-2xl font-bold">{truncatedTitle}</h2>
        <p className="text-sm max-w-full truncate">{truncatedDescription}</p>
      </Link>
    );
  });

  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-start items-stretch w-full text-start">{postCards}</div>;
}

export default PostList;
