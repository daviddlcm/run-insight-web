import React from "react";

function TextInput({ type = "text", name, value, onChange, placeholder, autoComplete }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  );
}

export default TextInput; 