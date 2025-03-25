import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3, Brandlogo } from "../../assets";
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import { Content } from "../../assets";
import Container from "../shared/Container/Container";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Header.css";

const images = [Image1, Image2, Image3];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-slide every 3 seconds (Resets when state changes)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Now resets when currentIndex changes

  // Previous Slide Function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Next Slide Function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Toggle Menu Function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // Desktop Version
    <header id="header" className="relative w-full h-screen overflow-hidden">
{/* Highlight with welcome text and number and mail */}
      <div className="bg-gray-700 px-4 py-2  relative flex text-center justify-between items-center">
          {/* Number and mail in golden box */}
        <div className="bg-[#C9A267] px-2 border-2 border-black text-white relative flex">
          <div className="justify-between px-4 py-3 items-center flex relative text-sm">
        24x7 Emergency :{"  "}
                  <a
                    href="tel:9073672051"
                    className="text-sm px-1 flex-col font-semibold"
                  >
                    9073672051
                  </a>
                  {"  "}|{"  "}
                  <a
                    href="tel:9073932051"
                    className="text-sm px-1 flex-col font-semibold"
                  >
                    9073932051
                  </a>
                  </div>
        </div>
         
        <h1 className="text-[#C9A267] items-center justify-between text-center px-4 py-3 font-extrabold relative flex">
          Welcome to Innerwork Advisors LLP
        </h1>
        <div className="bg-[#C9A267] px-2 border-2 border-black text-white text-lg relative flex">
          <div className="justify-between px-4 py-3 items-center flex relative text-sm">
               Email Id :{"  "}
                  <a
                    href="mailto:innerworkadvisorsllp@gmail.com"
                    className="text-sm px-1 flex flex-col font-semibold"
                  >
                    innerworkadvisorsllp@gmail.com
                  </a>
                  </div>
                   {/*END -  Number and mail in golden box */}
        </div>
      </div>
{/* Highlight with welcome text and number and mail */}
      
      {/* Image Container */}
      <div className="relative inset-0 flex items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
             {/*END -  Image Container */}
            {/* Overlay container*/}
            <Container>
              {/* Social media icons */}
              <div>
            <div className="absolute flex space-x-4 top-0 left-0 py-3 w-full  px-4">
                <div className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <a href="#facebook" alt="facebook">
                           <FaFacebookF className="text-white text-md" />
                           </a>
                         </div>
                         <div className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                         <a href="#facebook" alt="facebook">
                          <FaTwitter className="text-white text-sm" />
                           </a>
                           </div>
                           <div className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-75 cursor-pointer">
                         <a href="#facebook" alt="facebook">
                          <FaInstagram className="text-white text-sm" />
                           </a>
                         </div>
                         <div className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                         <a href="#facebook" alt="facebook">
                          <FaLinkedinIn className="text-white text-sm" />
                           </a>
                         </div>
                       
              </div>
              {/*END - Social media icons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-50 py-2 px-3">

              {/* Headings on Images with slicing*/}
              <span className="text-4xl md:text-4xl mb-4">
                <strong>
                {Content[index].title.length === 33
                  ? Content[index].title.substring(
                      0,
                      Math.floor(Content[index].title.length / 2)
                    )
                  : Content[index].title.substring(
                      0,
                      Math.floor(Content[index].title.length / 2 + 1.5)
                    )}
                    </strong>
              </span>

              <span className="text-4xl md:text-4xl mb-4">
                <strong>
                {Content[index].title.length === 33
                  ? Content[index].title.substring(
                      Math.floor(Content[index].title.length / 2)
                    )
                  : Content[index].title.substring(
                      Math.floor(Content[index].title.length / 2 + 1.5)
                    )}
                    </strong>
              </span>
              {/* Description with slicing */}
              <span className="text-lg justify-between items-center text-center mb-2 relative">
                <em>
                {Content[index]?.description.split(" ").slice(0, 10).join(" ")}
                </em>
              </span>
              <span className="text-lg justify-between items-center text-center mb-6 relative">
                <em>{Content[index]?.description.split(" ").slice(10).join(" ")}</em>
              </span>
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 mb-8 px-6 py-3">
                {/* Know More Button */}
                <button
                  className="px-6 py-3 !bg-blue-400 text-white !font-semibold !text-lg !rounded-lg !shadow-md !border-2 !border-black hover:!bg-blue-800 transition-all duration-300"
                  onClick={bookCTA}
                >
                  Book Consultation
                </button>

                {/* Contact Us Button */}
                <button
                  className="px-6 py-3 bg-white !text-gray-900 !font-semibold !text-lg !rounded-lg !shadow-md !border-2 !border-black hover:!bg-[#C9A267] transition-all duration-300"
                  onClick={contactCTA}
                >
                  CONTACT US
                </button>
                </div>
              {/*End - CTA Buttons */}
            </div>
             {/* Navigation Arrows - left*/}
            <button
        className=" bg-white absolute left-6 top-1/2  p-3 bg-opacity-50 rounded-full text-black hover:bg-opacity-70 transition-all duration-100"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </button>
 {/* Navigation Arrows - Right*/}
      <button className="next-btn" onClick={nextSlide}>
        <FaChevronRight size={30} />
      </button>
      </div>
            </Container>
            {/* End - Overlay container*/}
          </div>
          
        ))}
      </div>
      {/* End - Image Container */}

  
    </header>
  );
};

export default Header;
