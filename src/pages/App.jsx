import React from "react";
import "../output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin.jsx";
import Privacidad from "./Privacidad.jsx";
import Navbar from "../layouts/Navbar.jsx";
import LoginForm from "../components/organisms/LoginForm.jsx";
import HomeBackground from "../components/atoms/HomeBackground.jsx";


function Home() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      <HomeBackground />
      {/* Magenta Orb Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <Navbar bg="transparent" />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-2 gap-8">
            {/* Lado izquierdo - Texto de bienvenida */}
            <div className="flex flex-col items-start justify-center text-left flex-1 mb-8 lg:mb-0">
              <h1 className="text-2xl font-bold text-[#FF7F2A] font-poppins-medium uppercase">Bienvenido</h1>
              <span className="text-8xl font-extrabold text-white mt-2 font-poppins-medium uppercase">RunInsight</span>
            </div>
            {/* Lado derecho - Formulario de login */}
            <div className="flex items-center justify-center flex-1 w-full">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <div className="relative z-10 flex flex-col flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<><Navbar bg="black" /><Admin /></>} />
            <Route path="/privacidad" element={<><Navbar bg="black" /><Privacidad /></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
