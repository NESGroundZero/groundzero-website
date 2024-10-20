import React, { useState, useEffect } from "react";
import styles from "../style";
import '../index.css'; 

const CountdownUnit = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="countdown-circle">
        {value}
      </span>
      <span className={`${styles.paragraph} mt-2`}>
        {label}
      </span>
    </div>
  );
};

const CountdownTimer = ({ eventDate, eventName = "Ground Zero 2025" }) => {
  const [timeRemaining, setTimeRemaining] = useState(() => {
    const currentTime = new Date().getTime();
    const eventTime = new Date(eventDate).getTime();
    return Math.max(eventTime - currentTime, 0);
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date(eventDate).getTime();
      let remainingTime = eventTime - currentTime;

      if (remainingTime <= 0) {
        remainingTime = 0;
        clearInterval(countdownInterval);
        alert("Countdown complete!");
      }

      setTimeRemaining(remainingTime);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [eventDate]);

  useEffect(() => {
    document.title = eventName;
  }, [eventName]);

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="flex justify-around mt-4">
        {/* Use the CountdownUnit component for days, hours, minutes, and seconds */}
        <CountdownUnit value={days.toString().padStart(2, "0")} label="days" />
        <CountdownUnit value={hours.toString().padStart(2, "0")} label="hours" />
        <CountdownUnit value={minutes.toString().padStart(2, "0")} label="mins" />
        <CountdownUnit value={seconds.toString().padStart(2, "0")} label="secs" />
      </div>
    );
  };

  return (
    <div className="text-center">
      {/* <h2 className="${styles.heading5} mb-4">{eventName}</h2> */}
      {/* <p className="${styles.paragraph}">{formatDate(eventDate)}</p> */}
      {timeRemaining > 0 ? (
        formatTime(timeRemaining)
      ) : (
        <p className="${styles.heading4}">The event has launched!</p>
      )}
    </div>
  );
};

export default CountdownTimer;