import React from "react";

const ServiceContainer = ({ title, description, Icon, iconList = [] }) => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-10 md:space-y-0">

      {/* Left Section */}
      <div className="flex items-center justify-center" style={{ height: "200px", width: "40%" }}>
        <img
          src={Icon}
          alt={title}
          className="w-full h-500 md:w-full md:h-150 object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))" }}
        />
      </div>

      {/* Right Section */}
      <div className="content-wrapper text-center md:text-left px-4">
        <h2 className="title text-2xl md:text-4xl font-bold text-white">
          {title}
        </h2>

        <div className="divider my-4 h-1 w-16 bg-cyan-500 mx-auto md:mx-0"></div>

        <p className="text-sm text-gray-300 leading-relaxed max-w-md md:max-w-lg">
          {description}
        </p>

        {/* Image List */}
        <div className="img-wrapper flex items-center justify-center md:justify-end mt-4 space-x-2">
          {iconList.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} icon ${index + 1}`}
              className="w-8 h-8  transition-transform transform hover:scale-110" style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
