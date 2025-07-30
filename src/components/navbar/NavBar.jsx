import React from "react"

function Navbar () {

    return (
      <header className="mt-2 md:mt-8 w-full"
      style={{ backgroundColor: "#C0E2E3" }}>
<nav className="flex justify-end p-4 mx-4 mr-6 space-x-6 text-sm md:text-base shadow-md">
      
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