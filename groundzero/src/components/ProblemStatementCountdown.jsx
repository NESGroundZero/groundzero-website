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
        <div className={`${styles.flexCenter} w-full text-white`}>
          <div className="lg:w-[700px] w-[85%] bg-[#2b2853] lg:py-16 lg:px-20 py-8 px-10 content-center rounded-3xl text-center">
            <div
              className={`font-lexendDeca font-semibold md:text-[32px] text-[22px] text-white md:leading-[40px] md:mb-12 mb-4 mt-3 opacity-80`}
            >
              Ground Zero will be starting in
            </div>
            <div className="countdown-timer">
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[60px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{days}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Days</div>
              </div>
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[60px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{hours}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Hours</div>
              </div>
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[60px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{minutes}</div>
                <div className="font-poppins md:text-[23px] text-[3vw] text-white opacity-80 md:mb-0 mb-4">Minutes</div>
              </div>
              <div className="countdown-timer-days">
                <div className="font-lexendDeca font-semibold md:text-[70px] text-[8.5vw] text-white xs:leading-[40px] leading-[60px] md:mb-8 md:mt-0 mt-1 mb-2 opacity-80 transition transform hover:scale-105 hover:opacity-100">{seconds}</div>
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
