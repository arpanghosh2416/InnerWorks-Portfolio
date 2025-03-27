import React, { useEffect, useState } from "react";
import { Brandlogo } from "../../assets";
import { Dropdown, DropMenu } from "../shared";
import { Book } from "react-feather";
import { DropdownItem } from "../shared/Dropdown/Dropdown";
// import {FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  // const menus = ["Home", "About", "Our Services","Contact Us"];
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
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  const navigation = [
    { link: '#home', text: 'Home' },
    { link: '#about', text: 'About Us' },
    { link: '#service', text: 'Our Services' },
    { link: '#contact', text: 'Contact Us' },
  ];
  return (
    <nav className="flex relative top-0 w-full font-mono font-bold justify-between items-center text-white bg-[#415781] shadow-md px-10 py-auto z-50 ">
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
        <ul className="flex gap-x-8 text-xl">
         
            {navigation.map(nav =>(
              <li key={nav.text}>
                <a className="!text-white hover:!text-black transition duration-300" href={nav.link}>
                  {nav.text}
                </a>
          </li>
            )
            )}
         <li>
            <a
              href="#extra"
              className="!text-white hover:!text-black transition duration-150"
            >
              <Dropdown className="bg-black" trigger={<DropMenu>More Info</DropMenu>}>
              <DropdownItem>
                <Book size={20} />Our Blogs
              </DropdownItem>
              <DropdownItem>
                <Book size={20} />Our Legal Insights
              </DropdownItem>
              <DropdownItem>
                <Book size={20} />Our Case Studies
              </DropdownItem>
              </Dropdown>
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
