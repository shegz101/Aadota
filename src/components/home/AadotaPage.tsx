import React from "react";
import Aadota from '../../assets/Àádọ́ta.png';
import bg from "../../assets/bg.png";

const AadotaPage: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#0d0f36] pt-10">
      {/* Main Content */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="text-center px-5 mt-12">
          <h1 className="mx-auto">
            <img src={Aadota} alt="Logo" className="w-full h-auto" />
          </h1>
          <p className="text-sm text-[#FFFFFF] w-full mx-auto mt-[-5px] tracking-[0.2em] font-['Clash_Display']">
            Celebrating 50 Golden Years
          </p>
          <p className="text-base text-center mt-6 leading-relaxed text-gray-400 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <button className="relative z-30 mt-8 px-6 py-2 text-base font-medium text-[#0d0f36] bg-gradient-to-r from-[#B46A11] via-[#D68D15] to-[#FBF491] rounded-full shadow-md hover:opacity-90 transition-all">
            Register Now
          </button>
        </div>
      </div>

      {/* Background Image Container with Extended Gradient */}
      <div className="absolute -bottom-10 left-0 right-0 w-full h-[60vh]">
        {/* Extended Gradient Overlay */}
        <div className="absolute -top-20 inset-x-0 bottom-0 bg-gradient-to-b from-[#0d0f36] via-[#0d0f36]/70 to-transparent z-10"></div>
        
        {/* Background Image */}
        <img 
          src={bg} 
          alt="Background" 
          className="w-full h-full object-cover pt-10"
        />
      </div>
    </div>
  );
};

export default AadotaPage;