import React from "react";
import MediaQuery from "react-responsive";
import { useState } from "react";
import styles from "../../style";
import BokehBackground2 from "../Backgrounds/BokehBackground2";
import ScreenSizeIndicator from "../Utility/ScreenSizeIndicator";
import DisplayButton from "../Utility/DisplayButton";
import SectionDivider from "../Utility/SectionDivider";

const GlassBox = ({ children, gradient }) => {
  return (
    <div className={`w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] xl:w-[30rem] xl:h-[30rem] backdrop-blur-xl 
      ${gradient}  
      border-[0rem] rounded-full 
      px-2 py-12 sm:px-6 sm:py-20 xl:px-16 xl:pt-24 
      transition-all duration-300 
      hover:shadow-[0_0_60px_15px_rgba(46,150,255,0.9)] hover:border-blue1`}>
      <div className="h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

const WhoCanJoin = {
  title: "Who can join?",
  mainText1: "- Tertiary students from:",
  bulletPoints: [
    "Polytechnic",
    "Junior College",
    "University/ITE",
    "NSF",
  ],
  mainText2: "- Alumni of up to 5 years"
};

const HowToJoin = {
  title: "How to join?",
};

const gradientLeft = "bg-gradient-to-r from-darkBlue/5 to-blue2/40 to-blue2/60 to-purple/20";
const gradientRight = "bg-gradient-to-r from-blue1/40 to-[#FF0077]/40 to-purple/14 to-[E877C8]/";

const Eligibility = () => {
  return (
    <div id="eligibility">
    <div className={`relative z-10 ${styles.paddingY}`}>
      <h2 className={styles.heading7 + " mb-14 relative"}>ELIGIBILITY CRITERIA</h2>
      <br className="hidden lg:block" />
      <br className="hidden lg:block" />
      <br className="hidden lg:block" />
      <br className="hidden lg:block" />
      <div id="glassbox-container" className="relative">
        <BokehBackground2 />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-28 p-4">
          {/* First Glass Box */}
          <GlassBox gradient={gradientLeft}>
            <h2 className="text-white font-poppins font-lighter text-2xl sm:text-3xl xl:text-4xl text-center z-10">
              {WhoCanJoin.title}
            </h2>
            <div className="flex flex-col flex-grow items-center justify-center text-gray-200 text-sm md:text-lg xl:text-lg px-16 font-poppins">
              <p className="mt-2 sm:mt-6">{WhoCanJoin.mainText1}</p>
              <div className="ml-8 md:space-y-1 mt-2">
                {WhoCanJoin.bulletPoints.map((point, index) => (
                  <p key={index} className="text-left text-sm md:text-md xl:text-lg">
                    • {point}
                  </p>
                ))}
              </div>
              <p className="mt-2">{WhoCanJoin.mainText2}</p>
            </div>
          </GlassBox>

          {/* Divider Line - Only visible on md and above */}
          <div id="divider" className="hidden lg:block w-2 h-96 bg-blue2 rounded-full"></div>

          {/* Second Glass Box */}
          <GlassBox gradient={gradientRight}>
            <h2 className="text-white font-poppins font-lighter text-2xl sm:text-3xl xl:text-4xl text-center z-10">
              {HowToJoin.title}
            </h2>
            <div className="text-center flex-grow flex flex-col items-center justify-center">
              <p className="text-gray-200 text-lg md:text-xl xl:text-2xl px-6 font-poppins inline-flex items-center justify-center gap-2 flex-wrap">
                You may register
                <button
                  className="text-blue1 cursor-pointer"
                >
                  as an individual
                </button>
                or
                <button
                  className="text-blue1 cursor-pointer"
                >
                  in a team of 3 - 5
                </button>
              </p>
            </div>
          </GlassBox>
        </div>
      </div>
    </div>
    <SectionDivider spacing={1.0}/>
    </div>
  );
};

export default Eligibility;