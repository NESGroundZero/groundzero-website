import React from 'react';
import EventScheduleDay from './EventScheduleDay';
import { WeekSchedule } from '../../../constants';

const EventScheduleThreeColumns = () => {
    const days = WeekSchedule[0].days;
    
    return (
        <div className="flex flex-row gap-6 xl:gap-8">
            {/* Column 1: Day 1 */}
            <div className="flex-1 bg-backgroundComplement/30 p-6 rounded-lg shadow-md border border-blue1/20 hover:border-blue1/40 transition-all duration-300">
                <EventScheduleDay
                    dayText={days[0].dayText}
                    scheduleData={days[0].scheduleData}
                />
            </div>
            
            {/* Column 2: Days 2-6 stacked */}
            <div className="flex-1 flex flex-col space-y-8">
                <div className="bg-backgroundComplement/30 p-6 rounded-lg shadow-md border border-blue1/20 hover:border-blue1/40 transition-all duration-300">
                {days.slice(1, 6).map((day, index) => (
                    <div 
                        key={index} 
                    >
                        <EventScheduleDay
                            dayText={day.dayText}
                            scheduleData={day.scheduleData}
                        />
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                ))}
                </div>
            </div>
            
            {/* Column 3: Day 7 */}
            <div className="flex-1 bg-backgroundComplement/30 p-6 rounded-lg shadow-md border border-blue1/20 hover:border-blue1/40 transition-all duration-300">
                <EventScheduleDay
                    dayText={days[6].dayText}
                    scheduleData={days[6].scheduleData}
                />
            </div>
        </div>
    );
};

export default EventScheduleThreeColumns;