// src/components/Footer.jsx
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
        
        {/* Logo or Title */}
        <div className="text-xl font-semibold text-cyan-100">
          NextHire
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/realpuneet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/realpuneet22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com/realpuneet.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center sm:text-right">
          © {new Date().getFullYear()} All rights reserved · Puneet Yadav
        </div>
      </div>
    </footer>
  );
};

export default Footer;
