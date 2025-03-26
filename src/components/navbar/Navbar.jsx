import React, { useEffect, useState } from "react";
import { Brandlogo } from "../../assets";
import {FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex relative top-0 w-full font-mono font-bold justify-between items-center text-white bg-[#415781] shadow-md px-10 py-auto z-50">
      <section>
        <a href="#home">
          <img
            src={Brandlogo}
            alt="Brand"
            className="w-40 py-3 px-2 flex justify-between items-center relative"
          />
        </a>
      </section>
      <section className="flex gap-x-8  text-xl">
        <ul className={`"flex gap-x-8 text-xl" ${menuOpen ? "open":""}`}>
          <li>
            <a
              href="#home"
              className="!text-white hover:!text-black transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="!text-white hover:!text-black transition duration-150"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="!text-white hover:!text-black transition duration-150"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="!text-white hover:!text-black transition duration-150"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <button className="hidden bg-[#415781] cursor-pointer text-right border-0" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
