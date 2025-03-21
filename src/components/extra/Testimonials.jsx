import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import testimonialData from "../../assets/json/testimonialData.json"; 

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTestimonials(testimonialData);

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
    <div className="testimonial-container">
      <div className="progress-bar"></div>
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
  );
};

export default Testimonials;
