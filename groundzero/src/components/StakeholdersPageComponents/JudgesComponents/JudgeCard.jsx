import React, { useState } from 'react';
import { FaDatabase, FaChartLine, FaHeartbeat, FaLeaf, FaGavel, FaLinkedin } from 'react-icons/fa';
import { edward_tay } from '../../../assets';
import { getCategoryColor, lightenColor } from '../StakeholdersPageUtils';

const judgeSample = {
  imgsrc: edward_tay,
  title: "Edward Tay",
  AreaOfFocus: "Data Tech",
  company: ["NUS"],
  subtitle: ["Professor"],
  personalLink:
    "https://www.linkedin.com/in/edwardtayweemeng/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
};

const JudgeCard = ({ judge = judgeSample, hoverColor = getCategoryColor(judge.AreaOfFocus) }) => {
  // Add state to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Get lighter color for hover effect
  const lighterColor = lightenColor(hoverColor, 25); // 25% lighter than hoverColor

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
      className="mx-auto flex flex-col w-[15rem] sm:w-[33rem] sm:flex-row gap-6 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out"
      style={{
        borderLeft: `8px solid ${isHovered ? lighterColor : hoverColor}`,
        transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="w-full sm:w-48 md:w-56 lg:w-64 flex justify-center">
        <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden ${isHovered ? 'ring-4' : 'ring-0'} transition-all duration-300`}
          style={{ ringColor: isHovered ? lighterColor : 'transparent' }}>
          <img src={judge.imgsrc} alt={judge.title} className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Details Section - Flexible width with min-width */}
      <div className="flex-1 sm:w-auto min-w-0">
        <div className="flex flex-col justify-between h-full">
          {/* Top Section */}
          <div>
            <h2 className="text-xl font-bold mb-2 truncate">{judge.title}</h2>
            <p className="text-xs sm:text-md text-gray-600 mb-1">{judge.subtitle.join(', ')}</p>
            <p className="text-xs sm:text-md text-gray-500 mb-3">{judge.company.join(', ')}</p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center space-x-3 pt-2">
            <div className="transition-transform duration-300" style={{ color: hoverColor }}>
              {getAreaIcon(judge.AreaOfFocus)}
            </div>
            <a
              href={judge.personalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors ml-6 hover:scale-110"
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