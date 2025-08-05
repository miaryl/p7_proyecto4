import React from "react";

function Footer() {
  return (
    <footer className="bg-[#EBFFD8] text-black py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-right">
          © 2025. Todos los derechos reservados.
        </p>
      <div className="flex gap-9">
      <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-300 transition"
          >
            <img
              src="src/assets/fb.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300 transition"
          >
            <img
              src="src/assets/ig.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="mailto:tucorreo@ejemplo.com"
            aria-label="Email"
            className="hover:text-gray-300 transition"
          >
            <img
              src="src/assets/mail.png"
              alt="Email"
              className="w-6 h-6"
            />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;




