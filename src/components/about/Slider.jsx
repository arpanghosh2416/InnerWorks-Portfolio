import React, { useState } from "react";
import bibaswanImage from "../../assets/slider/Mr-Bibaswas-Mukherjee-500x500.webp";
import sujitImage from "../../assets/slider/Mr-Sujit-Chakraborty-500x500.webp";
import asimImage from "../../assets/slider/Mr-Ashim-Ali-500x500.webp";
import deepakImage from "../../assets/slider/Mr-Deepak-Kumar-Dutta-500x500.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./Slider.module.css";

const sliderData = [
  {
    id: "SUJIT CHAKRABORTY",
    title: "37+ years of Experience",
    description:
      "Noted for his prowess in crime detection during his tenure in the detective department.",
    details:
      "Sujit Chakraborty has worked for over 37 years in the detective department, solving numerous high-profile criminal cases. He has extensive experience in forensic investigations and law enforcement strategies.",
    image: sujitImage,
  },
  {
    id: "Md Asim Ali",
    title: "37+ years of Experience",
    description:
      "Investigated various criminal cases. Possesses sound knowledge about court proceedings.",
    details:
      "Md Asim Ali has been involved in high-profile criminal investigations. His expertise in court proceedings makes him a valuable asset in solving complex legal cases.",
    image: asimImage,
  },
  {
    id: "DEEPAK KUMAR DUTTA",
    title: "38+ years of Experience",
    description:
      "Served as an officer in the Detective Department of the Kolkata Police for over 12 years.",
    details:
      "Deepak Kumar Dutta has served in the Kolkata Police for over 12 years. His experience in handling serious crime cases and investigative techniques has made him an expert in the field.",
    image: deepakImage,
  },
  {
    id: "BIBASWAN MUKHERJEE",
    title: "Expertise in Cyber Law",
    description:
      "Specialized knowledge in cyber law and forensics, reflecting a keen understanding of digital legal matters.",
    details:
      "Bibaswan Mukherjee is an expert in cyber law and forensics. His knowledge of digital forensics, cybersecurity, and legal frameworks makes him an authority in the field.",
    image: bibaswanImage,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const nextSlide = () => {
    if (currentIndex < sliderData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const openModal = (expert) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExpert(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer} className="text-center">
        <h2 className="text-[#C9A267] italic !text-lg" style={styles.heading}>
          Our Team
        </h2>
        <p className="!font-bold !text-3xl" style={styles.subheading}>
          EXPERTS AT WORK
        </p>

        <div className="flex items-center gap-3 mt-2">
          <i className="mkdf-icon-font-awesome fa fa-bank mkdf-icon-element text-[#C9A267] text-3xl"></i>
          <hr className="flex-1 w-24 border-t border-[#C9A267]" />
        </div>

        <p className="!text-lg mt-4">
          For years, we have built a legacy of success based on integrity,
          dedication, and relentless advocacy. Our proven track record is a
          testament to our ability to navigate complex legal challenges and
          achieve favourable results for our clients.
        </p>
      </div>

      <div style={styles.sliderContainer}>
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={styles.prevButton}
        >
          ←
        </button>

        <div style={styles.card}>
          <img
            className="!py-0.5"
            src={sliderData[currentIndex].image}
            alt={sliderData[currentIndex].id}
            style={styles.cardImage}
          />
          <h3>{sliderData[currentIndex].id}</h3>
          <p className="!font-bold text-[#C9A267]">
            {sliderData[currentIndex].title}
          </p>
          <p>{sliderData[currentIndex].description}</p>
          <button
            className="px-6 py-3 bg-white !text-gray-900 !font-semibold !text-lg !rounded-lg 
           !shadow-md !border-2 !border-black hover:!bg-[#eba720ea] 
           !transition-all !duration-300"
            style={styles.knowMoreButton}
            onClick={() => {
              console.log("Contact Us Clicked");
              openModal(sliderData[currentIndex]);
            }}
          >
            Know More
          </button>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === sliderData.length - 1}
          style={styles.nextButton}
        >
          →
        </button>
      </div>

      {isModalOpen && selectedExpert && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>{selectedExpert.id}</h2>

            {selectedExpert.id === "SUJIT CHAKRABORTY" && (
              <div style={{ textAlign: "center" }}>
                <img
                  src="src\assets\slider\SUJIT CHAKRABORTY.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "80%",
                    marginBottom: "10px",
                    marginLeft: "200px",
                  }}
                />
                <p>
                  Mr. Sujit Chakraborty, a distinguished individual, holds a
                  B.Sc (Hons), LLB, and LLM degree. With an illustrious career
                  spanning 37 years in the Kolkata Police, he has held various
                  esteemed positions. Notably, he served as Officer in Charge of
                  8 police stations and attained the rank of Assistant
                  Commissioner of Police. His tenure in the Detective department
                  showcased exceptional proficiency in crime detection and
                  investigation of many critical cases in Kolkata, earning him
                  numerous accolades from the Commissioner of Police Kolkata as
                  well as from the police authorities of other states, the
                  Judiciary, the President of India, including the prestigious
                  Indian Police Medal for meritorious service. Additionally, Mr.
                  Chakraborty's commitment to global peace was demonstrated
                  through his service in the United Nations Peacekeeping Mission
                  in Kosovo.
                </p>
              </div>
            )}

            {selectedExpert.id === "Md Asim Ali" && (
              <div style={{ textAlign: "center" }}>
                <img
                  src="src\assets\slider\Md Asim Ali.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "80%",
                    marginBottom: "10px",
                    marginLeft: "200px",
                  }}
                />
                <p>
                  Mr. Md Asim Ali, a distinguished individual, holds B.Sc and
                  LLB degrees. With an illustrious career spanning 37 years in
                  the Kolkata Police Force, he investigated various criminal
                  cases and held charges at different Police Stations as Officer
                  in Charge. Mr. Ali possesses a sound understanding of court
                  proceedings. Additionally, he served for one year as a Police
                  Officer in Kosovo on behalf of the United Nations Peacekeeping
                  Force, demonstrating his commitment to global peace and
                  security.
                </p>
              </div>
            )}
            {selectedExpert.id === "DEEPAK KUMAR DUTTA" && (
              <div style={{ textAlign: "center" }}>
                <img
                  src="src\assets\slider\DEEPAK KUMAR DUTTA.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "80%",
                    marginBottom: "10px",
                    marginLeft: "200px",
                  }}
                />
                <p>
                  Mr. Deepak Kumar Dutta, a graduate with honors from the
                  University of Calcutta with a B.Com degree, boasts an
                  impressive career spanning over 38 years in the Kolkata Police
                  Force. During his tenure, he served as an officer in the
                  Detective Department for more than 12 years, showcasing his
                  expertise in investigative work. Mr. Dutta's leadership skills
                  were evident as he held the position of Officer-in-Charge in 8
                  different Police Stations across Kolkata. Throughout his
                  distinguished career, he earned numerous accolades and awards,
                  reflecting his dedication and contributions to law
                  enforcement.
                </p>
              </div>
            )}
            {selectedExpert.id === "BIBASWAN MUKHERJEE" && (
              <div style={{ textAlign: "center" }}>
                <img
                  src="src\assets\slider\BIBASWAN MUKHERJEE.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "80%",
                    marginBottom: "10px",
                    marginLeft: "200px",
                  }}
                />
                <p>
                  Mr. Bibaswan Mukherjee, holding BA LLB and LLM degrees
                  specializing in corporate and business law, possesses
                  specialized expertise in cyber law and cyber forensics. With a
                  robust legal background, he has practiced at the High Court
                  Calcutta and other esteemed High Courts. Mr. Mukherjee is
                  recognized as a proficient advocate, having secured landmark
                  judgments at a remarkably young age, showcasing his
                  exceptional talent and dedication to the legal profession.
                </p>
              </div>
            )}

            {/* Close Button */}
            <br />
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
