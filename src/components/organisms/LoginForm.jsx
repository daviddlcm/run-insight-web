import React, { useState } from "react";
import TextInput from "../atoms/TextInput.jsx";
import Button from "../atoms/Button.jsx";
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../../assets/img/Logo runin.png';

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
    <div className="flex flex-col items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 object-contain drop-shadow-lg mb-4 mt-2"
      />
       <h2 className="text-3xl font-bold text-white text-center mb-4">Acceso Admin</h2>
      <p className="text-gray-300 text-center mb-4">
        Por favor ingresa tus credenciales para acceder al panel de administración.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 py-8 px-8 rounded-lg shadow-lg flex flex-col gap-8  min-w-[370px] text-base"
      >
       
        <TextInput
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={form.usuario}
          onChange={handleChange}
          autoComplete="username"
          icon={FaUser}
          inputClassName="text-lg py-3 mx-auto max-w-[180px]"
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          icon={FaLock}
          inputClassName="text-lg py-3 mx-auto max-w-[180px]"
        />
        {error && <div className="text-red-400 text-sm text-center">{error}</div>}
        <div className="mt-8 flex justify-center">
          <Button type="submit" className="text-sm py-2  min-w-[50px]">Acceder</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm; 