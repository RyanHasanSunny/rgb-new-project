import React from "react";
import Grid from "../../Grid";

const ServiceContainer = ({ title, description, Icon }) => {
  return (
    <div className="w-full min-h-screen p-6 rounded-lg flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-10 md:space-y-0" >

      {/* Left Section */}
      <div className="flex items-center bg-gray-800 justify-center" style={{ backgroundColor: "rgba(26, 27, 26, 0.92)", height: "400px", width: "40%" }} >
        <div className="icon-container p-4 shadow-md" >
          <img
            src="https://via.placeholder.com/150"
            alt={title}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg"
          />

        </div>
      </div>

      {/* Right Section */}
      <div className="content-wrapper text-center md:text-left px-4">
        <h2 className="main-title text-2xl md:text-4xl font-bold text-white">
          {title}
        </h2>

        <div className="divider my-4 h-1 w-16 bg-cyan-500 mx-auto md:mx-0"></div>

        <p className="text-sm text-gray-300 leading-relaxed max-w-md md:max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceContainer;
