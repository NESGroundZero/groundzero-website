import React from 'react';
import { linkedin } from '../../../assets';

const PanelistsBox = ({ stakeholder, hoverColor = "#0077B5" }) => {
  return (
    <div className="relative w-60 h-60 ss:w-60 ss:h-60 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60 bg-black justify-center place-items-center">
      {/* Stakeholder Image */}
      <img 
        src={stakeholder.imgsrc}
        className="object-cover w-60 h-60 ss:w-60 ss:h-60 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60"
        alt={stakeholder.title}
        loading='lazy'
      />

      {/* Description Overlay */}
      <div className="w-full h-full md:opacity-0 md:hover:opacity-100 z-10 transition ease-in-out text-white">
        <div className="flex flex-col">
          {/* Bottom gradient overlay with hex color */}
          <div 
            className="w-full h-4/5 absolute text-left bottom-0 left-0"
            style={{ 
              background: `linear-gradient(to top, ${hoverColor} 0%, ${hoverColor}90 30%, transparent 70%)` 
            }}
          >
            <div className="absolute bottom-0 left-0 p-4 align-text-bottom">
              <h2 className="text-sm sm:text-xl font-bold">
                {stakeholder.title}
              </h2>
              <h2 className="text-[0.6rem] sm:text-[15px] font-semibold">
                {stakeholder.subtitle.join(", ")}
              </h2>
              <h2 className="text-xs sm:text-sm font-light">
                {stakeholder.company.join(", ")}
              </h2>
            </div>
          </div>
          
          {/* Top gradient for LinkedIn icon with hex color */}
          <div 
            className="w-full h-1/4 absolute text-left top-0 right-0"
            style={{ 
              // background: `linear-gradient(to bottom, ${hoverColor} 0%, transparent 100%)` 
            }}
          >
            <a href={stakeholder.personalLink} target="_blank" rel="noopener noreferrer" className="absolute p-4 top-0 right-0 hover:scale-110 transition ease-in-out delay-75">
              <img src={linkedin} className="h-[20px] md:h-[25px]" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelistsBox;