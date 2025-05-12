import React from 'react';
import { linkedin } from "../../../assets";
import { 
  FaDatabase, 
  FaChartLine, 
  FaHeartbeat, 
  FaLeaf 
} from 'react-icons/fa';
import { getCategoryColor, lightenColor } from '../StakeholdersPageUtils';


const MentorBox = ({ stakeholder, hoverColor = "#0077B5" }) => {
  // Helper function to get the appropriate area icon div
  const getAreaIcon = (areaOfFocus) => {
    switch (areaOfFocus) {
      case "Data Tech":
        return (
          <div className="absolute py-4 ss:px-4 top-0 right-12 hover:scale-110 transition ease-in-out delay-75" title="Data Tech">
            <FaDatabase className="h-[0.8rem] ss:h-[25px]" />
          </div>
        );
      case "Finance":
        return (
          <div className="absolute py-4 ss:px-4 top-0 right-12 hover:scale-110 transition ease-in-out delay-75" title="Finance">
            <FaChartLine className="h-[0.8rem] ss:h-[25px]" />
          </div>
        );
      case "Health & Wellness":
        return (
          <div className="absolute py-4 ss:px-4 top-0 right-12 hover:scale-110 transition ease-in-out delay-75" title="Health & Wellness">
            <FaHeartbeat className="h-[0.8rem] ss:h-[25px]"/>
          </div>
        );
      case "Sustainability":
        return (
          <div className="absolute py-4 ss:px-4 top-0 right-12 hover:scale-110 transition ease-in-out delay-75" title="Sustainability">
            <FaLeaf className="h-[0.8rem] ss:h-[25px]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-30 h-30 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60 bg-black grid place-items-center">
      {/* Stakeholder Image */}
      <img 
        src={stakeholder.imgsrc}
        className="object-cover w-30 h-30 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60"
        alt={stakeholder.title}
        loading='lazy'
      />

      {/* Description Overlay */}
      <div className="w-full h-full opacity-0 hover:opacity-100 z-10 transition ease-in-out text-white">
        <div className="flex flex-col">
          {/* Bottom gradient overlay with hex color */}
          <div 
            className="w-full h-4/5 absolute text-left bottom-0 left-0"
            style={{ 
              background: `linear-gradient(to top, ${hoverColor} 0%, ${hoverColor}90 30%, transparent 70%)` 
            }}
          >
            <div className="absolute bottom-0 left-0 p-4 align-text-bottom">
              <h2 className="text-[0.7rem] ss:text-xl font-bold">
                {stakeholder.title}
              </h2>
              <h2 className="text-[0.5rem] ss:text-[15px] font-semibold">
                {stakeholder.subtitle.join(", ")}
              </h2>
              <h2 className="text-[0.6rem] ss:text-sm font-light">
                {stakeholder.company.join(", ")}
              </h2>
            </div>
          </div>
          
          {/* Top gradient for icons with hex color */}
          <div 
            className="w-full h-1/4 sm:h-1/4 absolute text-left top-0 right-0"
            style={{ 
              background: `linear-gradient(to bottom, ${hoverColor} 0%, transparent 70%)` 
            }}
          >
            {/* LinkedIn icon */}
            <a 
              href={stakeholder.personalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute py-4 pr-4 top-0 right-0 hover:scale-110 transition ease-in-out delay-75"
            >
              <img src={linkedin} className="h-[0.8rem] bg-blue2 ss:h-[25px]" alt="LinkedIn" />
            </a>
            
            {/* Area of Focus Icon - Dynamically rendered */}
            {getAreaIcon(stakeholder.AreaOfFocus)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorBox;