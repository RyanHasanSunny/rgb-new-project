import React from 'react';
import { ChevronDown } from 'lucide-react';
import "../styles/Aboutsection.css";

export default function Servicesection() {
  return (
    <div id='servicesection' className="aboutsection flex flex-col h-screen justify-evenly " style={{paddingInline: '5%'}}>
      {/* Header */}
      <div className="">
        <h2 className="welcome text-2xl ">Services</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-end justify-center min-h-[60vh] px-8" style={{paddingRight: '10%'}}>
        <div className="content-wrapper">
          <h2 className="main-title">It's me</h2>
          <p className="subtitle">Ryan Hasan Sunny</p>
          
          <div className="divider"></div>
          
          <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus 
            porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque 
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper 
            nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat 
            porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit 
            amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. 
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end  ">
       
        <div className="text-sm text-gray-400">
          <h2 className="mb-1">Explore Our Services,</h2>
          <h2>Where Innovation Meets Excellence</h2>
        </div>

        <div className="flex flex-col space-y-2">
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
}