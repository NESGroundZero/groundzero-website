import React, { useState } from 'react';
import { sponsorsData } from '../constants';
function SponsorTier({ title, sponsors, flexClass, itemClass }) {

  // Function to get the title style based on the title
  const getTitleStyle = (title) => {
    switch (title) {
      case "Diamond":
        return "font-bold text-5xl mb-8 text-center bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      case "Platinum":
        return "font-bold text-4xl mb-8 text-center bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      case "Gold":
        return "font-bold text-3xl mb-8 text-center bg-gradient-to-r from-yellow-800 via-yellow-100 to-yellow-800 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
      default:
        return "font-bold text-2xl mb-8 text-center text-white";
    }
  };


  return (
    <div className="mb-12">
      <h2 className={getTitleStyle(title)}>{title}</h2>
      <div className={`flex flex-wrap gap-2 ${flexClass}`}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`${itemClass}`}>
            <div className="w-full">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full object-contain border-2 border-white/20 rounded-lg shadow-lg"
              />
            </div>

            {/* Description for small screens */}
            {sponsor.description && sponsor.description.trim() !== '' && (
              <div className="text-md mt-4 text-white text-center p-4 bg-black/50 rounded sm:hidden">
                {sponsor.description}
              </div>
            )}

            {/* Description for large screens */}
            {sponsor.description && sponsor.description.trim() !== '' && (
              <div className="text-lg hidden sm:block mt-4 text-white text-center p-4 bg-black/50 rounded">
                {sponsor.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SponsorsGrid() {
  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-2xl mx-auto px-4">
      <SponsorTier
        title="Diamond"
        sponsors={sponsorsData.diamond}
        flexClass="justify-between"
        itemClass="w-full"
      />
      {/* <SponsorTier
        title="Platinum"
        sponsors={sponsorsData.platinum}
        flexClass="justify-center"
        itemClass="w-[45%] md:w-[45%]"
      /> */}
      <SponsorTier
        title="Gold"
        sponsors={sponsorsData.gold}
        flexClass="justify-center"
        itemClass="w-[30%] md:w-[30%]"
      />
      <SponsorTier
        title="Community Partners"
        sponsors={sponsorsData.communitypartners}
        flexClass="justify-center"
        itemClass="w-[24%] md:w-[24%]"
      />
    </div>
  );
}