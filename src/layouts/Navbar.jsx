import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
      <span className="font-bold text-xl tracking-wide">RunInsight</span>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-400 transition">Inicio</Link></li>
        <li><Link to="/admin" className="hover:text-blue-400 transition">Admin</Link></li>
        <li><Link to="/privacidad" className="hover:text-blue-400 transition">Privacidad</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 