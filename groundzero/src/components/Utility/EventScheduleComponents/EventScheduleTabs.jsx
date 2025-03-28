import React, { useState } from 'react';
import EventScheduleDay from './EventScheduleDay';
import PropTypes from 'prop-types';
import { WeekSchedule } from '../../../constants';

const TabButton = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-3 font-poppins transition-all duration-300 border-b-2 text-sm sm:text-base
            ${active 
                ? 'border-blue1 text-blue1 font-medium' 
                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
            }`}
    >
        {children}
    </button>
);

TabButton.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

const EventScheduleTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const days = WeekSchedule[0].days;

    // Content to display based on active tab
    const renderTabContent = () => {
        switch(activeTab) {
            case 0: // Day 1
                return (
                    <EventScheduleDay 
                        dayText={days[0].dayText} 
                        scheduleData={days[0].scheduleData} 
                    />
                );
            case 1: // Days 2-6
                return (
                    <div className="flex flex-col space-y-12">
                        {days.slice(1, 6).map((day, index) => (
                            <EventScheduleDay 
                                key={index + 1}
                                dayText={day.dayText} 
                                scheduleData={day.scheduleData} 
                            />
                        ))}
                    </div>
                );
            case 2: // Day 7
                return (
                    <EventScheduleDay 
                        dayText={days[6].dayText} 
                        scheduleData={days[6].scheduleData} 
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full px-4">
            <div className = "flex justify-center w-full">
            <div className="flex justify-center mb-6 border-b border-gray-600 w-1/2 min-w-[18rem]">
                <TabButton 
                    active={activeTab === 0} 
                    onClick={() => setActiveTab(0)}
                >
                    Day 1
                </TabButton>
                <TabButton 
                    active={activeTab === 1} 
                    onClick={() => setActiveTab(1)}
                >
                    Days 2-6
                </TabButton>
                <TabButton 
                    active={activeTab === 2} 
                    onClick={() => setActiveTab(2)}
                >
                    Day 7
                </TabButton>
            </div>
            </div>
            <div className="py-4">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default EventScheduleTabs;