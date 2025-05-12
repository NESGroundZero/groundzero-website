import React, { useState } from 'react';
import { FaDatabase, FaChartLine, FaHeartbeat, FaLeaf, FaGavel, FaLinkedin } from 'react-icons/fa';
import { edward_tay } from '../../../assets';
import { getCategoryColor, lightenColor } from '../StakeholdersPageUtils';

const JudgeCard = ({ judge, hoverColor = getCategoryColor(judge.AreaOfFocus) }) => {
  // Add state to track hover
  const [isHovered, setIsHovered] = useState(false);
  
  // Get lighter color for hover effect
  const lighterColor = lightenColor(hoverColor, 10);

  // Helper function to get the appropriate area icon
  const getAreaIcon = (areaOfFocus) => {
    switch (areaOfFocus) {
      case "Data Tech":
        return <FaDatabase className="h-6 w-6 sm:h-8 sm:w-8" />;
      case "Finance":
        return <FaChartLine className="h-6 w-6 sm:h-8 sm:w-8" />;
      case "Health & Wellness":
        return <FaHeartbeat className="h-6 w-6 sm:h-8 sm:w-8" />;
      case "Sustainability":
        return <FaLeaf className="h-6 w-6 sm:h-8 sm:w-8" />;
      default:
        return <FaGavel className="h-6 w-6 sm:h-8 sm:w-8" />;
    }
  };

  return (
    <div
      className="mx-auto flex flex-col w-[15rem] sm:w-[30rem] sm:flex-row gap-6 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: isHovered ? hoverColor : 'white',
        borderLeft: `8px solid ${isHovered ? lighterColor : hoverColor}`,
        transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full sm:w-48 md:w-56 lg:w-64 flex justify-center">
        <div className={`
          w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 
          rounded-full overflow-hidden transition-all duration-300
          ${isHovered ? 'ring-4' : 'ring-0'}
        `}
        style={{
          borderColor: isHovered ? 'white' : 'transparent',
          boxShadow: isHovered ? `0 0 0 4px white` : 'none'
        }}>
          <img src={judge.imgsrc} alt={judge.title} loading='lazy' className="object-cover w-full h-full" />
        </div>
      </div>
      
      <div className="flex-1 sm:w-auto min-w-0">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 
              className="text-xl font-bold mb-2 truncate transition-colors duration-300"
              style={{ color: isHovered ? 'white' : 'black' }}
            >
              {judge.title}
            </h2>
            <p 
              className="text-xs sm:text-md mb-1 transition-colors duration-300"
              style={{ color: isHovered ? 'white' : '#4B5563' }}
            >
              {judge.subtitle.join(', ')}
            </p>
            <p 
              className="text-xs sm:text-md mb-3 transition-colors duration-300"
              style={{ color: isHovered ? 'rgba(255,255,255,0.8)' : '#6B7280' }}
            >
              {judge.company.join(', ')}
            </p>
          </div>

          <div className="flex items-center space-x-3 pt-2">
            <div 
              className="transition-transform duration-300"
              style={{ color: isHovered ? 'white' : hoverColor }}
            >
              {getAreaIcon(judge.AreaOfFocus)}
            </div>
            <a
              href={judge.personalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 hover:scale-110 transition-colors duration-300"
              style={{ color: isHovered ? 'white' : '#2563EB' }}
            >
              <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeCard;