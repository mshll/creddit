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
  try {
    const response = await fetch(`${baseUrl}/posts/:${id}`);
    post = await response.json();
  } catch (error) {
    console.error('Post not found');
    redirect('/posts');
    return;
  }

  return post;
}

export async function createPost(formData) {
  const post = {
    ...Object.fromEntries(formData),
    adopted: 0,
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
