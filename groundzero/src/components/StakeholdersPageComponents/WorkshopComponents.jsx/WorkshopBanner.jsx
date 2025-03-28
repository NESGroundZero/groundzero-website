import React from 'react';

const WorkshopBanner = ({ title }) => {
  return (
    <div className="bg-blue2/90 p-3 text-white">
      <h3 className="font-bold text-lg md:text-xl text-center">{title}</h3>
    </div>
  );
};

export default WorkshopBanner;