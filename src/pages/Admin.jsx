import React from "react";
import LoginForm from "../components/organisms/LoginForm.jsx";
import Navbar from "../layouts/Navbar.jsx";

function Admin() {
  // Aquí podrías manejar el estado de login y redirección al dashboard
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Navbar bg="black" />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default Admin; 