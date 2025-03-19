import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import styles from "./Slider.module.css";
import classNames from "classnames";
import { SCP, BMP, DKDPP, MAAP, BMW, DKDPW, MAAW, SCW } from "../../assets";

const sliderData = [
  {
    id: "SUJIT CHAKRABORTY",
    title: "37+ years of Experience",
    description:
      "Noted for his prowess in crime detection during his tenure in the detective department.",
    details:
      "Sujit Chakraborty has worked for over 37 years in the detective department, solving numerous high-profile criminal cases. He has extensive experience in forensic investigations and law enforcement strategies.",
    image: SCW,
  },
  {
    id: "Md Asim Ali",
    title: "37+ years of Experience",
    description:
      "Investigated various criminal cases. Possesses sound knowledge about court proceedings.",
    details:
      "Md Asim Ali has been involved in high-profile criminal investigations. His expertise in court proceedings makes him a valuable asset in solving complex legal cases.",
    image: MAAW,
  },
  {
    id: "DEEPAK KUMAR DUTTA",
    title: "38+ years of Experience",
    description:
      "Served as an officer in the Detective Department of the Kolkata Police for over 12 years.",
    details:
      "Deepak Kumar Dutta has served in the Kolkata Police for over 12 years. His experience in handling serious crime cases and investigative techniques has made him an expert in the field.",
    image: DKDPW,
  },
  {
    id: "BIBASWAN MUKHERJEE",
    title: "Expertise in Cyber Law",
    description:
      "Specialized knowledge in cyber law and forensics, reflecting a keen understanding of digital legal matters.",
    details:
      "Bibaswan Mukherjee is an expert in cyber law and forensics. His knowledge of digital forensics, cybersecurity, and legal frameworks makes him an authority in the field.",
    image: BMW,
  },
];

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px 20px",
    backgroundColor: "#415781",
    color: "white",
    gap: "30px",
  },
  textContainer: {
    flex: "1",
    textAlign: "left",
    paddingLeft: "50px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: "500",
    marginBottom: "20px",
  },
  sliderContainer: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "220px",
    height: "320px",
    backgroundColor: "#222",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
    padding: "15px",
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImage: {
    width: "auto",
    height: "90px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  prevButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    outline: "none",
    padding: "10px",
  },
  nextButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    outline: "none",
    padding: "10px",
  },
  knowMoreButton: {
    backgroundColor: "#ffffff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "600px",
    backgroundColor: "#ffffff",
    color: "#000",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  },
  closeButton: {
    backgroundColor: "#E11D48",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

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
          THE PILLARS
        </p>

        <div className="flex items-center gap-3 mt-2">
          <hr className="w-[10%] flex border-t border-[#C9A267]" />
          <i className="mkdf-icon-font-awesome fa fa-bank mkdf-icon-element text-[#C9A267] text-xl"></i>
          <hr className="flex-1 w-24 border-t border-[#C9A267]" />
        </div>

        <p className="!text-lg mt-4">
          For years, we have built a legacy of success based on integrity,
          dedication, and relentless advocacy. Our proven track record is a
          testament to our ability to navigate complex legal challenges and
          achieve favourable results for our clients.
        </p>
      </div>

      {/* Show 3 Cards in a Row */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {sliderData.slice(0, 3).map((item, index) => (
          <div key={index} style={styles.card}>
            <img
              className="!py-0.5"
              src={item.image}
              alt={item.id}
              style={styles.cardImage}
            />
            <h3>{item.id}</h3>
            <p className="!font-bold text-[#C9A267]">{item.title}</p>
            <p>{item.description}</p>
            <button
              className="px-6 py-3 bg-white !text-gray-900 !font-semibold !text-lg !rounded-lg 
          !shadow-md !border-2 !border-black hover:!bg-[#C9A267] 
          !transition-all !duration-300"
              style={styles.knowMoreButton}
              onClick={() => openModal(item)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && selectedExpert && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>{selectedExpert.id}</h2>

            {selectedExpert.id === "SUJIT CHAKRABORTY" && (
              <div style={{ textAlign: "center" }}>
                <img
                  src={SCP}
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
                  src={MAAP}
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
                  src={DKDPP}
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
                  src={BMP}
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
