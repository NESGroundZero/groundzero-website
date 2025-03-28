import React from 'react';

function SponsorsLogos({ sponsors, flexClass, itemClass, descriptionsAtBottom }) {
  return (
    <div className={`flex flex-wrap gap-2 ${flexClass}`}>
      {sponsors.map((sponsor, index) => (
        <div key={index} className={`${itemClass}`}>
          <div className="w-full group relative">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full object-contain border-2 border-white/20 rounded-lg shadow-lg 
                         transition-all duration-300 ease-in-out
                         group-hover:border-blue1 group-hover:shadow-blue1/30 group-hover:shadow-xl 
                         group-hover:scale-105"
            />
            
          </div>


          {/* Only show descriptions here if not set to display at bottom */}
          {!descriptionsAtBottom && sponsor.description && sponsor.description.trim() !== '' && (
            <>
              {/* For small screens */}
              <div className="text-sm sm:text-md mt-4 text-white text-center py-4 sm:hidden" style={{textAlign: 'justify'}}>
                {sponsor.description}
              </div>
              
              {/* For larger screens */}
              <div className="text-lg hidden sm:block mt-4 text-white text-center py-4" style={{textAlign: 'justify'}}>
                {sponsor.description}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default SponsorsLogos;