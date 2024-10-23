import Button from './Button';
import { addComment } from '@/actions';
import { useState } from 'react';
import CommentsList from './CommentsList';

function Comments({ post }) {
  const initialCommentState = {
    username: '',
    comment: '',
  };

  const [comment, setComment] = useState(initialCommentState);

  function handleChange(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    setComment(initialCommentState);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between flex-0 mx-auto container py-6 px-10 border bg-slate-50 rounded-2xl gap-6">
        <h2 className="font-bold text-2xl w-full">Comments ({post.comments.length})</h2>
        <form action={(form) => addComment(form, post.id)} onSubmit={handleSubmit} className="w-full flex flex-col mx-20">
          <div className="py-2 px-4 mb-4 bg-slate-100 rounded-lg rounded-t-lg border border-slate-200 flex flex-col">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="px-0 w-full text-sm bg-slate-100 text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Username"
              value={comment.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-2 px-4 mb-4 bg-slate-100 rounded-lg rounded-t-lg border border-slate-200 flex flex-col">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              name="comment"
              rows="6"
              className="px-0 w-full bg-slate-100 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              value={comment.comment}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button type="submit" className={'self-end'}>
            Post comment
          </Button>
        </form>
      </div>
      <CommentsList post={post} />
    </>
  );
}

export default Comments;
