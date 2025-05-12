import React from 'react';
import PropTypes from 'prop-types';
import SponsorsLogos from './SponsorsLogos';

export default function SponsorsTier({ title, sponsors, flexClass, itemClass, descriptionsAtBottom }) {
 
    // Get only the color styling based on the title
  const getTitleColorStyle = (title) => {
    switch (title) {
      case "Diamond Sponsors":
        return "bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      case "Platinum Sponsors":
        return "bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      case "Gold Sponsors":
        return "bg-gradient-to-r from-yellow-400 via-yellow-200 via-yellow-200 to-yellow-800 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      case "Community Partners":
        return "bg-gradient-to-r from-blue1 via-white to-blue1 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      case "Beyond Zero Partners":
        return "bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";    
    case "Media Partners":
        return "bg-gradient-to-r from-foregroundViolet via-white via-purple to-foregroundViolet bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";        
    default:
        return "text-white";
    }
  };
  
  // Get the title size based on the title
  const getTitleSizeStyle = (title) => {
    switch (title) {
      case "Diamond Sponsors":
        return "text-3xl md:text-5xl";
      case "Platinum Sponsors":
        return "text-2xl md:text-5xl";
      case "Gold Sponsors":
        return "text-2xl md:text-5xl";
      case "Beyond Zero Partners":
        return "text-3xl";
      case "Community Partners": 
        "text-2xl md:text-3xl";
      default:
        return "text-2xl md:text-3xl";
    }
  };

  return (
    <div className="mb-4 md:mb-4">
      <h2 className={`font-bold mb-8 text-center ${getTitleSizeStyle(title)} ${getTitleColorStyle(title)}`}>
        {title}
      </h2>
      
      {/* Logos section */}
      <SponsorsLogos 
        sponsors={sponsors} 
        flexClass={flexClass} 
        itemClass={itemClass}
        descriptionsAtBottom={descriptionsAtBottom}
      />
      
      {/* Additional descriptions section - only shown when descriptionsAtBottom is true */}
      {descriptionsAtBottom && (
        <div className="mt-8 pt-4 border-t border-white/20">
          <h3 className={`text-xl text-center mb-6 ${getTitleColorStyle(title)}`}>
            About Our {title}
          </h3>
          <div className="flex flex-col gap-6">
            {sponsors.map((sponsor, index) => (
              sponsor.description && sponsor.description.trim() !== '' && (
                <div key={`desc-${index}`} className="bg-black/30 py-4 px-6 rounded-lg shadow">
                  <h4 className={`text-md md:text-lg font-medium mb-2 ${getTitleColorStyle(title)}`}>
                    {sponsor.name}
                  </h4>
                  <p className="text-xs md:text-md xl:text-lg text-gray-200" style={{textAlign: 'justify'}}>
                    {sponsor.description}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      )}
      <br/>
      <br/>
    </div>
  );
}