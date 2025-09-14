import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import "../../styles/Aboutsection.css";
import Ryan from '../../assets/Ryan.png'; // fallback image
import { fetchAbout } from '../../api';

export default function Aboutsection() {
  const [aboutData, setAboutData] = useState({
    name: '',
    description: '',
    imageUrl: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAboutData = async () => {
      try {
        const data = await fetchAbout();
        setAboutData(data);
      } catch (err) {
        setError('Failed to load about data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getAboutData();
  }, []);

  if (loading) {
    return <div className="aboutsection flex flex-col h-full px-[5%] py-8 space-y-8 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="aboutsection flex flex-col h-full px-[5%] py-8 space-y-8 text-red-500">{error}</div>;
  }

  return (
    <div
      id='aboutsection'
      className="aboutsection flex flex-col h-full  px-[5%] py-8 space-y-8"
    >
      {/* Header */}
      <div>
        {/* <h2 className="welcome text-2xl text-white sm:text-3xl">Welcome</h2> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center sm:px-6 md:px-10">
        <div className="content-wrapper max-w-xl w-full">
          <h2 className="main-title text-white">It's me</h2>

          <div className="img-name-wrapper gap-4 p-6 flex-wrap sm:flex-nowrap">
            <div className="w-36 h-36 bg-gray-800 rounded-half flex items-center justify-center shrink-0">
              <img src={aboutData.imageUrl || Ryan} alt="Profile" className="" />
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h3 className="text-base  lg:text-2xl font-semibold">{aboutData.name}</h3>
              <p className="text-sm text-gray-400 leading-snug">
                {aboutData.titleLine || "Graphic Designer || Game Developer || Web Designer"}
              </p>
            </div>
          </div>

          <div className="divider h-px bg-gray-700 w-full" />

          <p className=" text-center text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 leading-relaxed"> 
            {aboutData.description}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between p-6 items-center sm:items-end">
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
