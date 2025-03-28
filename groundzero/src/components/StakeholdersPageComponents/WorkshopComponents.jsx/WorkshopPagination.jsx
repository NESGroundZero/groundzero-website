import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const WorkshopPagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  if (totalPages <= 1) return null;
  
  return (
    <div className="flex justify-between items-center mt-4">
      <button 
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={`p-1 rounded-full ${
          currentPage === 0 ? 'text-gray-400' : 'text-blue1 hover:bg-blue1/10'
        }`}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <span className="text-sm text-gray-600">
        Page {currentPage + 1} of {totalPages}
      </span>
      
      <button 
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`p-1 rounded-full ${
          currentPage === totalPages - 1 ? 'text-gray-400' : 'text-blue1 hover:bg-blue1/10'
        }`}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WorkshopPagination;