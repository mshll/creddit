'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const baseUrl = 'http://localhost:8000';
const headers = new Headers();
headers.append('Content-Type', 'application/json');

export async function fetchPosts() {
  let posts;

  try {
    const response = await fetch(`${baseUrl}/posts`);
    posts = await response.json();
  } catch (error) {
    console.error(error);
    redirect('/');
    return;
  }

  return posts;
}

export async function fetchPostById(id) {
  let post;

  const response = await fetch(`${baseUrl}/posts/${id}`);
  post = await response.json();

  if (!post.title) {
    console.error(post.message);
    redirect('/posts');
  }

  return post;
}

export async function createPost(formData) {
  const post = {
    ...Object.fromEntries(formData),
  };

  const response = await fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post),
  });

  const newPost = await response.json();
  revalidatePath('/posts');
  revalidatePath(`/posts/[id]`, 'page');
  redirect(`/posts/${newPost.id}`);
}

export async function deletePost(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: 'DELETE',
    headers,
  });

  revalidatePath('/posts');
  revalidatePath(`/posts/[id]`, 'page');
  redirect(`/posts`);
}

export async function addComment(formData, id) {
  const comment = {
    ...Object.fromEntries(formData),
  };
  const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment),
  });

  revalidatePath('/posts');
  revalidatePath(`/posts/[id]`, 'page');
}

export async function deleteComment(id) {
  const response = await fetch(`${baseUrl}/posts/comments/${id}`, {
    method: 'DELETE',
    headers,
  });

  revalidatePath('/posts');
  revalidatePath(`/posts/[id]`, 'page');
}
