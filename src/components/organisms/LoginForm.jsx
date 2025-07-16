import React, { useState } from "react";
import TextInput from "../atoms/TextInput.jsx";
import Button from "../atoms/Button.jsx";

function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.usuario === "admin" && form.password === "admin") {
      setError("");
      onLogin && onLogin();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Acceso Admin</h2>
      <TextInput
        type="text"
        name="usuario"
        placeholder="Usuario"
        value={form.usuario}
        onChange={handleChange}
        autoComplete="username"
      />
      <TextInput
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        autoComplete="current-password"
      />
      {error && <div className="text-red-400 text-sm text-center">{error}</div>}
      <Button type="submit">Acceder</Button>
    </form>
  );
}

export default LoginForm; 