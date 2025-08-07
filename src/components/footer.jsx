import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
            className="hover:text-gray-300 transition text-xl"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300 transition text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/1234567890" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gray-300 transition text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




