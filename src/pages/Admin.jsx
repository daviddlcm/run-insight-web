import React from "react";
import LoginForm from "../components/organisms/LoginForm.jsx";

function Admin() {
  // Aquí podrías manejar el estado de login y redirección al dashboard
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <LoginForm />
    </div>
  );
}

export default Admin; 