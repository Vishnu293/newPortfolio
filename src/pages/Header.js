import React from "react";
import logo from "../assets/pngwing.com.png";

const Header = () => {
  return (
    <div>
      <div className="w-screen h-20 bg-transparent flex items-center justify-between px-10 fixed top-0 z-50">
        <a href="#home" className="h-full">
          <img src={logo} alt="logo.png" className="h-full object-contain filter invert brightness-0 " />
        </a>
        <nav className="flex space-x-8">
          <a href="#home" className="font-medium text-gray-100 hover:text-red-950">
            Home
          </a>
          <a href="#about" className="font-medium text-gray-100 hover:text-red-950">
            About
          </a>
          <a href="#projects" className="font-medium text-gray-100 hover:text-red-950">
            Projects
          </a>
          <a href="#skills" className="font-medium text-gray-100 hover:text-red-950">
            Skills
          </a>
        </nav>
        <button className="bg-red-600 p-3 rounded-3xl text-white font-medium hover:bg-red-950">
          <a href="#contact" className="font-medium text-gray-100">
            Contact me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
