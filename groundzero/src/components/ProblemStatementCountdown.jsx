import React, { useEffect, useState, useRef } from "react";
import styles from "../style";
import { statementReleaseDate } from "../constants";
import { DisplayButton } from "./index";

const msInSecond = 1000;
const secondInMinute = msInSecond * 60;
const minuteInHour = secondInMinute * 60;
const hourInDay = minuteInHour * 24;

const ProblemStatementCountdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(statementReleaseDate).getTime();

    interval = setInterval(() => {
      const curr = new Date().getTime();
      const difference = countdownDate - curr;

      const days = Math.floor(difference / hourInDay);
      const hours = Math.floor((difference % hourInDay) / minuteInHour);
      const minutes = Math.floor((difference % minuteInHour) / secondInMinute);
      const seconds = Math.floor((difference % secondInMinute) / msInSecond);

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update states
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="problem-statement-countdown">
      <div
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        {/* <div className="w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>Countdown to the Start of Ground Zero</h1>
        </div> */}
        <h2 className={styles.heading7 + " py-20 mt-20 z-10 relative"}>PROBLEM STATEMENTS</h2>
  
        <h2 className="text-white font-poppins font-lighter text-center pb-20 md:text-2xl text-xl xs:px-16 lg:px-40 z-10">
        Problem statements will be released on 13 May 2025 - the first day of Ground Zero.
        </h2>

        <div className={`${styles.flexCenter} w-full text-white`}>
          <div className="countdown-timer-box">
            <div
              className={`font-lexendDeca font-semibold lg:text-[40px] md:text-[30px] text-[22px] text-white md:leading-[40px] md:mb-12 mb-4 mt-3 opacity-80`}
            >
              Statements will be released in
            </div>
            <div className="countdown-timer">
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[20px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{days}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Days</div>
              </div>
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[20px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{hours}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Hours</div>
              </div>
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[20px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{minutes}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Minutes</div>
              </div>
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[20px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{seconds}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementCountdown;
