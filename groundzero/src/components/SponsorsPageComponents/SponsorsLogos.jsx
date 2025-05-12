import React from 'react';

function SponsorsLogos({ sponsors, flexClass, itemClass, descriptionsAtBottom }) {
  return (
    <div className={`flex flex-wrap md:gap-2 ${flexClass}`}>
      {sponsors.map((sponsor, index) => (
        <div key={index} className={`${itemClass}`}>
          <div className="w-full mx-auto group relative flex flex-row justify-center items-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="justify-center items-center w-full max-w-[30rem] object-contain border-2 border-white/20 rounded-lg shadow-lg 
                         transition-all duration-300 ease-in-out
                         group-hover:border-blue1 group-hover:shadow-blue1/30 group-hover:shadow-xl 
                         group-hover:scale-105"
              loading="lazy" // Lazy load images for better performance
            />

          </div>


          {/* Only show descriptions here if not set to display at bottom */}

          {!descriptionsAtBottom && sponsor.description && sponsor.description.trim() !== '' && (
            <>
              <div className="mt-8 pt-4 pb-4 border-t border-white/20">
                <div className="flex flex-col gap-6">
                      <div key={`desc-${index}`} className="bg-black/30 py-4 px-6 rounded-lg shadow">
                        <h4 className={`text-md md:text-lg font-medium mb-2 text-blue1`}>
                          {sponsor.name}
                        </h4>
                        <p className="text-xs md:text-md xl:text-lg text-gray-200" style={{ textAlign: 'justify' }}>
                          {sponsor.description}
                        </p>
                      </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default SponsorsLogos;