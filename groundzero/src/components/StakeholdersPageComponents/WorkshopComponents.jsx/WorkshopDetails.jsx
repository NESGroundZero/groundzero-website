import React from 'react';
import { formatDate, formatTime } from './WorkshopUtils';

const WorkshopDetails = ({ speaker, company, location, date, onViewBio, showingBio }) => {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);
  
  return (
    <div className="md:col-span-2 flex flex-col justify-between">
      {/* Speaker and company */}
      <div>
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-darkBlue mb-1">
          {speaker}
        </h4>
        <p className="text-xs sm:text-sm text-darkBlue font-medium mb-4">
          {company}
        </p>
      </div>
      
      {/* Location and date/time */}
      <div className="space-y-2 text-blue2">
        <div className="flex items-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs sm:text-sm">{location}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs sm:text-sm">{formattedDate}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs sm:text-sm">{formattedTime}</span>
        </div>
      </div>
      
      {/* View Bio Button */}
      <button 
        className="mt-3 sm:mt-4 py-1.5 sm:py-2 px-3 sm:px-4 bg-blue2/80 hover:bg-blue1 text-xs sm:text-sm text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue1 focus:ring-opacity-50"
        onClick={onViewBio}
      >
        {showingBio ? 'Hide Bio' : 'View Bio'}
      </button>
    </div>
  );
};

export default WorkshopDetails;