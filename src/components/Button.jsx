import React from 'react';

function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-cyan-700 px-10 py-2 rounded-full text-sm font-semibold text-slate-50 hover:bg-cyan-800 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
