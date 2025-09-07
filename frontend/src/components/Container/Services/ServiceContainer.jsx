import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceContainer = ({ title, description, Icon, iconList = [] }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-10 md:space-y-20"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-start md:justify-center rounded-lg shadow-lg p-4"
        style={{ height: "200px" }}
      >
        <img
          src={Icon}
          alt={title}
          className="w-64 lg:w-80 h-auto md:w-full md:h-auto object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.34))" }}
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="content-wrapper text-center md:text-left px-4"
      >
        <h2 className="title text-2xl md:text-4xl py-2 font-bold text-white">
          {title}
        </h2>

        <div className="divider my-4 h-1 w-full bg-cyan-500 mx-auto md:mx-0"></div>

        <p className="text-gray-300 leading-relaxed max-w-md md:max-w-lg">
          {description}
        </p>

        {/* Icon List - supports both <img> and JSX icons like <FontAwesomeIcon /> */}
        <div className="img-wrapper flex items-center justify-center md:justify-end mt-4 space-x-2">
          {iconList.map((icon, index) => (
            <span key={index} className="w-8 h-8 flex items-center justify-center transition-transform transform hover:scale-110"
              style={{
                filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))",
              }}
            >
              {typeof icon === "string" ? (
                <img
                  src={icon}
                  alt={`${title} icon ${index + 1}`}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                icon // JSX component like <FontAwesomeIcon icon={faFigma} />
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceContainer;
