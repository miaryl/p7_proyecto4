import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#6896a0ff]">
        <nav className="flex justify-end items-center p-4 mx-4 relative">
          <button
            className="text-white text-3xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul
            className={`absolute top-full right-0 w-48 md:static md:w-auto flex flex-col md:flex-row md:space-x-6 text-sm md:text-base md:bg-transparent transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {["inicio", "añadir", "misfavoritas"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block font-bold text-black hover:text-gray-500 transition duration-200 hover:scale-105 py-2 text-right"
                  onClick={() => setMenuOpen(false)}
                >
                  {id === "añadir"
                    ? "Añadir Frase"
                    : id === "misfavoritas"
                    ? "Mis Favoritas"
                    : "Inicio"}
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




