import React from 'react';

const WorkshopPhoto = ({ photo, name, link }) => {
  return (
    <div className="md:col-span-1 flex justify-center items-center">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-36 h-48"
      >
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover object-center rounded-lg transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue1/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        </div>
      </a>
    </div>
  );
};

export default WorkshopPhoto;