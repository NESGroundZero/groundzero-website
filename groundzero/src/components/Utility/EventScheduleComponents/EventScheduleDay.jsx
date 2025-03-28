import React from 'react';
import PropTypes from 'prop-types';
import EventScheduleBox from './EventScheduleBox';

const EventScheduleDay = ({ dayText, scheduleData }) => {
    const formattedDate = dayText.date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        // Remove the unnecessary outer div that was causing extra space
        <div className="w-full flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{dayText.text}</h2>
            <h3 className="text-md md:text-lg text-gray-300 mb-1">{formattedDate}</h3>
            <p className="text-sm md:text-lg text-gray-400 mb-4">
                {dayText.details}
            </p>
            <div className="flex flex-col gap-4 w-full items-center">
                {scheduleData.map((event, index) => (
                    <EventScheduleBox
                        key={index}
                        timeText={event.time}
                        eventName={event.name}
                        details={event.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventScheduleDay;
