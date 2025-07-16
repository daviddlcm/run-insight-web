import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin.jsx";
import Privacidad from "./Privacidad.jsx";
import Navbar from "../layouts/Navbar.jsx";

function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Hola</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
