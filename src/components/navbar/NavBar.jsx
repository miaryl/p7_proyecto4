import React from "react"

function Navbar () {

    return (
      <header
  className="fixed top-0 left-0 w-full z-50 shadow-md"
  style={{ backgroundColor: "#6896a0ff" }}
>
  <nav className="flex justify-end p-4 mx-4 mr-6 space-x-6 text-sm md:text-base">
    <a href="#inicio" className="font-bold text-black hover:text-gray-500 transition duration-200 hover:scale-105">
      Inicio
    </a>
    <a href="#añadir" className="font-bold text-black hover:text-gray-500 transition duration-200 hover:scale-105">
      Añadir Frase
    </a>
    <a href="#misfavoritas" className="font-bold text-black hover:text-gray-500 transition duration-200 hover:scale-105">
      Mis Favoritas
    </a>
  </nav>
</header>

    );

}

export default Navbar