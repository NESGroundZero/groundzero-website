import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventScheduleBox = ({ timeText, eventName, details }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Add touch handling
    const handleTouch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsHovered(!isHovered);
    };

    return (
        <div
            className={`relative w-full max-w-xs bg-white p-4 border-4 transition-all duration-500 ease-in-out
                ${isHovered ? 'border-blue1 shadow-2xl shadow-blue1/50' : 'border-gray-400'}
                cursor-pointer touch-manipulation`} 
                onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouch}
            onTouchEnd={(e) => e.preventDefault()}
            role="button"
            tabIndex={0}
        >            
        <div className="flex flex-col space-y-2">
                <span className="text-sm text-gray-900">{timeText}</span>
                <h3 className="text-lg font-semibold text-blue2">{eventName}</h3>
                
                {/* Details section that appears on hover */}
                <div 
                    className={`overflow-hidden transition-all duration-500 ${
                        isHovered ? 'max-h-40' : 'max-h-0'
                    }`}
                >
                    <p className="text-sm text-gray-600">{details}</p>
                </div>
            </div>

            {/* Triangle in bottom-right corner */}
            <div 
                className={`absolute bottom-0 right-0 w-0 h-0 
                    border-l-[10px] border-l-transparent
                    border-t-[10px] border-t-transparent
                    ${isHovered ? 'border-r-[10px] border-r-blue1 border-b-[10px] border-b-blue1' 
                    : 'border-r-[10px] border-r-gray-300 border-b-[10px] border-b-gray-300'}
                    transition-colors duration-300`}
            />
        </div>
    );
};

// Add PropTypes validation
EventScheduleBox.propTypes = {
    timeText: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
};

export default EventScheduleBox;