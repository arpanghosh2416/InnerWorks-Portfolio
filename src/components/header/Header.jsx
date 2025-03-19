import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3 } from "../../assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Content } from "../../assets";
const images = [Image1, Image2, Image3];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const contactCTA = () => {
    window.location.href = "#contact";
  };
  const bookCTA = () => {
    window.location.href = "#book";
  };

  return (
    // Desktop Version
    <header id="header" className="relative w-full h-screen overflow-hidden">
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
            {/* Overlay container*/}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-50 py-4 px-6">
              {/* Number and mail in golden box */}

              <div className="absolute top-12 w-full flex justify-between items-center px-16">
                <div className="bg-[#C9A267] !flex px-6 py-2 items-center border-2 !border-black">
                  24x7 Emergency :{"  "}
                  <a
                    href="tel:9073672051"
                    className="text-sm px-1 flex flex-col font-semibold"
                  >
                    9073672051
                  </a>
                  {"  "}|{"  "}
                  <a
                    href="tel:9073932051"
                    className="text-sm px-1 flex flex-col font-semibold"
                  >
                    9073932051
                  </a>
                </div>

                <div className="bg-[#C9A267] flex max-w-auto px-6 py-2 items-center border-2 border-black">
                  Email Id :{"  "}
                  <a
                    href="mailto:innerworkadvisorsllp@gmail.com"
                    className="text-sm px-1 flex flex-col font-semibold"
                  >
                    innerworkadvisorsllp@gmail.com
                  </a>
                </div>
              </div>
              {/* End - Number and mail in golden box */}

              {/* Headings on Images with slicing*/}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {Content[index].title.length === 33
                  ? Content[index].title.substring(
                      0,
                      Math.floor(Content[index].title.length / 2)
                    )
                  : Content[index].title.substring(
                      0,
                      Math.floor(Content[index].title.length / 2 + 1.5)
                    )}
              </h1>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {Content[index].title.length === 33
                  ? Content[index].title.substring(
                      Math.floor(Content[index].title.length / 2)
                    )
                  : Content[index].title.substring(
                      Math.floor(Content[index].title.length / 2 + 1.5)
                    )}
              </h1>
              {/* Description with slicing */}
              <p className="text-2xl justify-between items-center text-center mb-6 relative">
                {Content[index]?.description.split(" ").slice(0, 10).join(" ")}
              </p>
              <p className="text-2xl justify-between items-center text-center mb-6 relative">
                {Content[index]?.description.split(" ").slice(10).join(" ")}
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 px-6 py-3">
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
            {/* End - Overlay container*/}
          </div>
        ))}
      </div>
      {/* End - Image Container */}

      {/* Navigation Arrows */}
      <button
        className=" bg-white absolute left-6 top-1/2  p-3 bg-opacity-50 rounded-full text-black hover:bg-opacity-70 transition-all duration-100"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </button>
      <button
        className="bg-white absolute right-6 top-1/2  p-3 bg-opacity-50 rounded-full text-black hover:bg-opacity-70 transition-all duration-100"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </button>
      {/*End -  Navigation Arrows */}
    </header>
  );
};

export default Header;
