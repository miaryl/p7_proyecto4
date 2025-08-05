import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#6896a0ff]">
        <nav className="flex justify-between items-center p-5 mx-4 relative">
            <a href="#inicio">
              <img src={logo} alt="Logo" className="w-[100px] h-auto" />
            </a>
          <button className="text-white text-3xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul
            className={`absolute top right-20 w-48 flex whitespace-nowrap space-x-6 md:flex-row md:static md:w-auto md:space-x-6 text-sm md:text-base md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}
            `}
          >
            {["inicio", "añadir", "misfavoritas"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block font-bold hover:text-gray-500 transition duration-200 hover:scale-105 whitespace-nowrap"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="block sm:hidden">
                    {id === "añadir"
                      ? "Añadir"
                      : id === "misfavoritas"
                        ? "Favoritas"
                        : "Início"}
                  </span>

                  <span className="hidden sm:block">
                    {id === "añadir"
                      ? "Añadir Frase"
                      : id === "misfavoritas"
                        ? "Mis Favoritas"
                        : "Inicio"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;




