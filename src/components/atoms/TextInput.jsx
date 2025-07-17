import React from "react";

function TextInput({ type = "text", name, value, onChange, placeholder, autoComplete, icon: Icon }) {
  return (
    <div className="relative w-full">
      {Icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Icon size={20} />
        </span>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`pl-10 pr-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full`}
      />
    </div>
  );
}

export default TextInput; 