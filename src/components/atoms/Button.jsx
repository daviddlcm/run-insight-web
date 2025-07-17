import React from "react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition w-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button; 