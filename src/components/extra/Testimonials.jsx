import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { Testimonial } from "../../assets";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTestimonials(Testimonial);

    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        testimonials.length ? (prevIndex + 1) % testimonials.length : 0
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return <p>Loading testimonials...</p>;

  const { name, position, photo, text } = testimonials[index];

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundImage: `url(https://innerworkadvisorsllp.com/wp-content/uploads/2024/04/Enquiry-Form.webp?id=6574)`,
      }}
    >
      <div className="p-10 py-20 flex flex-col lg:flex-row items-start gap-6 container mx-auto">
        <div className="flex flex-col lg:flex-auto lg:w-[40%] w-full gap-6 text-white">
          <h3 className="text-4xl font-semibold uppercase text-[#c9a267]">
            Testimonials
          </h3>
          <p className="text-xl font-medium">
            With numerous successful outcomes and satisfied clients, we have
            established ourselves as a beacon of excellence in Kolkata's legal
            and investigative communities.
          </p>
        </div>
        <div className="testimonial-container lg:flex-auto lg:w-[60%]">
          <div className="progress-bar mb-10"></div>
          <div className="fas fa-quote-right fa-quote"></div>
          <div className="fas fa-quote-left fa-quote"></div>
          <p className="testimonial">{text}</p>
          <div className="user">
            <img src={photo} alt={name} className="user-image" />
            <div className="user-details">
              <h4 className="username">{name}</h4>
              <p className="role">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
