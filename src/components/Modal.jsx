'use client';

import { createPost } from '@/actions';
import { useState } from 'react';
import Button from './Button';

function Modal() {
  const initialPostState = {
    title: '',
    description: '',
    comments: [],
  };

  const [post, setPost] = useState(initialPostState);
  const [show, setShow] = useState(false);

  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Button
        className="bg-cyan-700 px-10 py-2 rounded-full text-sm font-semibold text-slate-50 hover:bg-cyan-800 transition-all duration-200"
        onClick={() => setShow(true)}
      >
        New Post
      </Button>
      {show && (
        <div className="inset-0 fixed flex justify-center items-center flex-col z-20 overflow-hidden">
          <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
          <form
            action={createPost}
            className="relative z-10 flex justify-center flex-col gap-3 p-6 border rounded-lg min-w-[95%] md:min-w-[40%] min-h-[300px] md:min-h-[30%] bg-slate-50 pt-[50px]"
          >
            <button className="right-0 top-2 absolute rounded-md ml-auto mr-5 hover:text-red-400" onClick={() => setShow(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </button>
            <div className="flex justify-start flex-col gap-2 items-start w-full">
              <h1 className="flex-0 font-semibold">Title:</h1>
              <input
                name="title"
                value={post.title}
                onChange={handleChange}
                className="w-full border p-2 rounded-md bg-slate-100"
                placeholder="Post Title"
                required
              />
            </div>
            <div className="flex justify-start flex-col gap-2 items-start">
              <h1 className="font-semibold">Description:</h1>
              <textarea
                name="description"
                value={post.description}
                onChange={handleChange}
                className="w-full border p-2 rounded-md bg-slate-100 min-h-40"
                placeholder="Post Description"
                required
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 w-1/2 self-center mt-2 rounded-full text-sm font-semibold bg-cyan-800 text-slate-50 hover:bg-cyan-800 transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Modal;
