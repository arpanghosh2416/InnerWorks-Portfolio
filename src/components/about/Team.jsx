import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import teamData from "../../assets/json/team.json";
import SujitImage from "../../assets/slider/Mr-Sujit-Chakraborty-500x500.webp";
import AsimImage from "../../assets/slider/Mr-Ashim-Ali-500x500.webp";
import DeepakImage from "../../assets/slider/Mr-Deepak-Kumar-Dutta-500x500.webp";
import styles from "./Team.module.css"; 

const imageMap = {
  "Mr-Sujit-Chakraborty-500x500.webp": SujitImage,
  "Mr-Asim-Ali-500x500.webp": AsimImage,
  "Mr-Deepak-Kumar-Dutta-500x500.webp": DeepakImage,
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updatedData = teamData.map((member) => ({
      ...member,
      image: imageMap[member.image] || member.image, // Ensure correct image mapping
    }));
    setTeamMembers(updatedData);
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-12 bg-[#415781] text-white gap-8">
      {/* Left Section - Writing */}
      <div className="text-left lg:w-1/2">
        <h2 className="text-[#C9A267] italic font-bold text-lg">Our Team</h2>
        <p className="text-3xl font-bold">THE PILLARS</p>
        <div className="flex items-center gap-3 mt-2">
          <hr className="w-[15%] flex border-t border-[#C9A267]" />
          <i className="mkdf-icon-font-awesome fa fa-bank mkdf-icon-element text-[#C9A267] text-xl"></i>
          <hr className="flex-1 w-24 border-t border-[#C9A267]" />
        </div>
        <p className="text-lg mt-4">
          For years, we have built a legacy of success based on integrity,
          dedication, and relentless advocacy. Our proven track record is a
          testament to our ability to navigate complex legal challenges and
          achieve favourable results for our clients.
        </p>
      </div>

      {/* Right Section - Three Cards */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-[380px] max-w-[300px]"
            >
              <img
                src={item.image}
                alt={item.id}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-center">{item.id}</h3>
              <p className="text-sm text-[#C9A267] font-semibold text-center">{item.title}</p>
              <p className="text-sm text-center mt-2 flex-grow">{item.description}</p>
              {/* Fixed Button Placement */}
              <button
                className="px-4 py-2 bg-[#C9A267] text-white font-semibold rounded-lg mt-auto"
                onClick={() => openModal(item)}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && selectedMember && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className="text-xl font-bold mb-2">{selectedMember.id}</h2>
            <img
              src={selectedMember.image}
              alt={selectedMember.id}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <p className="text-[#C9A267] text-sm mt-2 font-semibold">
              {selectedMember.details}
            </p>
            <p className="text-gray-700 text-justify text-sm mt-2">
              {selectedMember.extra}
            </p>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;