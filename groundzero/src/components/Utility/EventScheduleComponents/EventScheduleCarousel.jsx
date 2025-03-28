import React, { useState } from 'react';
import EventScheduleDay from './EventScheduleDay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ScreenSizeIndicator from '../ScreenSizeIndicator';
import { WeekSchedule } from '../../../constants';

const EventScheduleCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalDays = WeekSchedule[0].days.length;
    
    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex(prev => Math.min(totalDays - 1, prev + 1));
    };

    return (
        <div className="relative w-full px-10">
            {/* Left Arrow */}
            <button 
                onClick={handlePrevious}
                className={`absolute left-[-3rem] xl:left-0 top-1/2 -translate-y-1/2 z-10
                    transition-all duration-300 ease-in-out
                    ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'}`}
                disabled={currentIndex === 0}
            >
                <ChevronLeftIcon className="w-16 h-16 text-blue1" />
            </button>

            {/* Left Gradient Overlay - only show when not at the beginning */}
            {currentIndex != 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-32 z-[5] pointer-events-none"
                     style={{
                         background: 'linear-gradient(to right, rgb(0, 19, 42, 0.6), rgba(0, 19, 42, 0))'
                     }}
                />
            )}

            {/* Days Container */}
            <div className="overflow-hidden relative">
                <div 
                    className="flex transition-transform duration-500 ease-in-out gap-16 xl:gap-2"
                    style={{
                        transform: `translateX(calc(-${currentIndex * (100 / 3)}% - min(${currentIndex * 20}rem, 9rem)))`,
                    }}
                >
                    {WeekSchedule[0].days.map((day, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 w-1/3 px-2"
                        >
                            <EventScheduleDay
                                dayText={day.dayText}
                                scheduleData={day.scheduleData}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Gradient Overlay - only show when not at the end */}
            {currentIndex != totalDays - 3 && (
                <div className="absolute right-0 top-0 bottom-0 w-32 z-[5] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to left, rgba(0, 19, 42, 0.7), rgba(0, 19, 42, 0))'
                    }}
                />
            )}

            {/* Right Arrow */}
            <button 
                onClick={handleNext}
                className={`absolute right-[-3rem] xl:right-0 top-1/2 -translate-y-1/2 z-10
                    transition-all duration-300 ease-in-out
                    ${currentIndex >= totalDays - 2 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'}`}
                disabled={currentIndex >= totalDays - 2}
            >
                <ChevronRightIcon className="w-16 h-16 text-blue1" />
            </button>
        </div>
    );
};

export default EventScheduleCarousel;