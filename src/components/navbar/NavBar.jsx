import React from "react"

function Navbar () {

    return (
      <header className="mt-2 md:mt-8 pr-8 w-full"
      style={{ backgroundColor: "#C0E2E3" }}>
      <nav className="flex justify-end p-4 space-x-6 text-sm md:text-base">
        <a href="#inicio" className="font-bold text-black hover:text-gray-500 transition-transform transition-colors duration-200
    duration-250 hover:scale-120">
          Inicio
        </a>
        <a href="#añadir" className="font-bold text-black hover:text-gray-500 transition-transform transition-colors duration-200
    duration-250 hover:scale-120">
          Añadir Frase
        </a>
        <a href="#misfrases" className="font-bold text-black hover:text-gray-500 transition-transform transition-colors duration-200
    duration-250 hover:scale-120">
          Mis Frases
        </a>
      </nav>
    </header>
    );

}

export default Navbar