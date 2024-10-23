'use client';
import { deleteComment } from '@/actions';

function CommentsList({ post }) {
  const comments = post.comments.map((comment) => (
    <div key={comment.id} className="flex items-start h-full w-full flex-1 flex-col mx-auto container p-10 border bg-slate-50 rounded-2xl">
      <div className="flex gap-2 w-full flex-col ">
        <div className="flex justify-between w-full">
          <div className="font-bold text-xl">{comment.username}</div>
          <button
            onClick={() => deleteComment(comment.id)}
            className="text-xs text-cyan-800 p-4 rounded-full bg-slate-100 hover:border-red-400 hover:bg-red-400 hover:text-slate-50 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"
              />
            </svg>
          </button>
        </div>
        <div className="text-slate-700">{comment.comment}</div>
      </div>
    </div>
  ));

  return <>{comments}</>;
}

export default CommentsList;
