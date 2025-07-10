import React from 'react';
import { ChevronDown } from 'lucide-react';
import "../../styles/Aboutsection.css";
import Ryan from '../../assets/ryan.jpg'; // Assuming you have a profile image

export default function Aboutsection() {
  return (
    <div
      id='aboutsection'
      className="aboutsection flex flex-col h-full justify-center px-[5%] py-8 space-y-8"
    >
      {/* Header */}
      {/* <div>
        <h2 className="welcome text-2xl text-white sm:text-3xl">Welcome</h2>
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] sm:px-6 md:px-10">
        <div className="content-wrapper max-w-xl w-full space-y-6">
          <h2 className="main-title text-white text-2xl sm:text-3xl md:text-4xl">It's me</h2>

          <div className="img-name-wrapper gap-4 p-6 flex-wrap sm:flex-nowrap">
            <div className="w-36 h-36 bg-gray-800 rounded-half flex items-center justify-center shrink-0">
              <img src={Ryan} alt="Profile" className="" />
            </div>
            <div className="flex flex-col text-white">
              <h3 className="text-base sm:text-lg font-semibold">Ryan Hasan Sunny</h3>
              <p className="text-sm text-gray-400 leading-snug">
                Graphic Designer || Game Developer || Web Designer
              </p>
            </div>
          </div>

          <div className="divider h-px bg-gray-700 w-full" />

          <p className="text-sm text-gray-300 leading-relaxed"> 
            I believe in the power of collaboration and communication, working closely with clients to understand their vision and goals. My commitment to continuous learning and staying updated with the latest trends in design and development allows me to bring fresh ideas and innovative solutions to the table.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between p-6 items-center sm:items-end gap-6">
        <div className="text-sm text-gray-400 text-center sm:text-left">
          <h2 className="mb-1">Explore Our Services,</h2>
          <h2>Where Innovation Meets Excellence</h2>
        </div>

        <div className="flex flex-col space-y-2 items-center sm:items-end">
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
