import React from "react";
import SectionContainer from "../Container/Section_Container/Section_Container";
import "../../styles/FeatureSection.css";
import RocketIcon from "../../assets/Rocket.svg";
import Land from "../../assets/Land.svg";

export default function CollaborationSection() {
  const sendEmail = (subject) => {
    const email = "ryangraphicboy@gmail.com";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <div
      id="collaborationsection"
      className="collaborationsection min-h-screen py-16 flex flex-col items-center justify-center overflow-x-hidden" // ✅ Prevent horizontal scroll
    >
      {/* Rocket Icon */}
      <div className="collaboration-image-container jump-animation flex justify-center mt-8 w-full max-w-xs mx-auto">
        <img
          src={RocketIcon}
          alt="Collaboration Illustration"
          className="collaboration-image"
          style={{
            width: "100%",
            maxWidth: "100px",
            filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.34))",
          }}
        />
      </div>

      {/* SectionContainer */}
      <SectionContainer
        title={`Ready to turn ideas into impact?\nWhether you're launching a new project or looking to elevate an existing one,\nwe’re here to bring your vision to life.`}
      >
        {/* CTA Buttons */}
        <div className="ButtonContainer">
          <div
            className="button-in-row"
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.34))",
            }}
          >
            <div className="collaboration-option" onClick={() => sendEmail("Graphic Design Inquiry")}>
              Graphic Design
            </div>
            <div className="collaboration-option" onClick={() => sendEmail("Web Design Inquiry")}>
              Web Design
            </div>
            <div className="collaboration-option" onClick={() => sendEmail("3D Modeling Inquiry")}>
              3D Modeling
            </div>
            <div className="collaboration-option" onClick={() => sendEmail("Other Project Inquiry")}>
              Others
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="collaboration-content text-center px-4 mt-8">
          <p className=" text-[14px] md:text-[16px] lg:text-[20px] px-10">
            We believe in the power of collaboration and communication, working
            closely with clients to understand their vision and goals. Our
            commitment to continuous learning and staying updated with the
            latest trends in design and development allows us to bring fresh
            ideas and innovative solutions to the table.
          </p>
        </div>

        {/* Land Image */}
        <div className="collaboration-image-container flex justify-center mt-8 w-full max-w-sm mx-auto">
          <img
            src={Land}
            alt="Collaboration Illustration"
            className="collaboration-image"
            style={{
              width: "100%",
              maxWidth: "200px",
              filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.34))",
            }}
          />
        </div>
      </SectionContainer>
    </div>
  );
}
