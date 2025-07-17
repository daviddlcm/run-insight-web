import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/Logo runin.png';

function Navbar({ bg = "transparent" }) {
  const location = useLocation();
  const bgClass = bg === "black" ? "bg-black bg-opacity-90" : "bg-transparent";
  return (
    <nav className={`w-full ${bgClass} text-white px-8 flex items-center justify-between shadow-none py-4`}>
      <span className="flex items-center gap-2 font-bold text-xl tracking-wide">
        <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
        RunInsight
      </span>
      <ul className="flex gap-2">
        <li>
          <Link
            to="/privacidad"
            className="bg-white text-black px-3 py-2 rounded transition font-poppins-regular font-semibold text-sm"
            style={{ minWidth: '80px', textAlign: 'center' }}
          >
            Aviso de Privacidad
          </Link>
        </li>
        {location.pathname !== "/" && (
          <li>
            <Link
              to="/"
              className="text-white px-3 py-2 rounded transition font-poppins-regular font-semibold text-sm hover:bg-pink-500 hover:text-white"
              style={{ minWidth: '80px', textAlign: 'center' }}
            >
              Inicio
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar; 