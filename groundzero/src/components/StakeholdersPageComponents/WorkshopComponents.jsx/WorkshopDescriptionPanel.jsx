import React from 'react';
import WorkshopPagination from './WorkshopPagination';

const WorkshopDescriptionPanel = ({ 
  isVisible, 
  speakerName, 
  chunks, 
  currentPage, 
  onClose,
  onNextPage,
  onPrevPage 
}) => {
  return (
    <div 
      className={`bg-white text-gray-800 shadow-inner transition-all duration-500 ease-in-out overflow-hidden ${
        isVisible ? 'max-h-[1000px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
      }`}
    >
      <div className="px-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-md font-bold text-darkBlue">About {speakerName}</h4>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Description text */}
        <div className="mb-3">
          <p className="text-xs md:text-base text-center">
            {chunks[currentPage]}
          </p>
        </div>
        
        {/* Pagination controls */}
        <WorkshopPagination
          currentPage={currentPage}
          totalPages={chunks.length}
          onNext={onNextPage}
          onPrevious={onPrevPage}
        />
      </div>
    </div>
  );
};

export default WorkshopDescriptionPanel;