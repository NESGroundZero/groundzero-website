import styles from "../../style";
import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import WavesBackground from "../Backgrounds/WavesBackground";
import SectionDivider from "../Utility/SectionDivider";

/* Timeline page. */
const Timeline = () => {
  const events = [
    { name: "Phase Zero", date: "14, 22, 29 MAR & 5 APR" },
    { name: "Ground Zero", date: "13 MAY - 19 MAY" },
    { name: "Beyond Zero", date: "19 MAY & BEYOND..." },
  ];

  return (

    <div>
      <MediaQuery minWidth={768}>
          <div id="timeline"
            className={`${styles.paddingY} w-full overflow-hidden relative`}
            style={{ height: 'clamp(50rem, 75vh, 70rem)' }}
            >
            <div className={`px-4`}>
              <h1 className={`${styles.heading7} pb-10`}>
                TIMELINE
              </h1>
            </div>
            <div className="relative w-full max-w-6xl mx-auto translate-y-28">
              {/* Horizontal Line */}
              <WavesBackground />
              <div
                className="absolute w-full h-0.5 bg-white"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              ></div>

              {/* Events */}
              <div className="flex justify-between items-center w-full mt-5">
                {events.map((event, index) => {
                  // Determine if the event is 'Ground Zero' to position it above the line
                  const isGroundZero = event.name === "Ground Zero";
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center relative"
                    >
                      {!isGroundZero && (
                        // Event Text and Dot below the line
                        <div className="flex flex-col items-center relative">
                          <div
                            className="w-6 h-6 bg-white rounded-full absolute"
                            style={{
                              top: "2rem",
                              left: "50%",
                              transform: "translateX(-50%) translateY(100%)",
                            }}
                          ></div>
                          <div
                            className="absolute w-0.5 bg-white"
                            style={{
                              top: "50%",
                              height: "2rem",
                              left: "50%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                          <span className="text-white text-3xl font-semibold translate-y-24">
                            {event.name}
                          </span>
                          <div className="text-gray-300 translate-y-24">
                            {event.date}
                          </div>
                        </div>
                      )}
                      {isGroundZero && (
                        // Event Dot and Text above the line
                        <div className="flex flex-col items-center mb-12">
                          <div className="w-6 h-6 bg-white rounded-full mb-2"></div>
                          <span className="text-white text-3xl font-semibold -translate-y-24">
                            {event.name}
                          </span>
                          <div className="text-gray-300 -translate-y-24">
                            {event.date}
                          </div>
                          <div
                            className="w-0.5 bg-white h-12 absolute"
                            style={{
                              bottom: "100%",
                              left: "50%",
                              transform: "translateX(-50%) translateY(140%)",
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
        <SectionDivider />
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div id="timeline" className={`${styles.paddingY} w-full overflow-hidden min-h-[40rem] h-[60vh]`}>
          <div className="px-4"
            id="timeline">
            <h1 className={`${styles.heading7}`}>
              TIMELINE
            </h1>
          </div>
          <div className="relative w-full max-w-6xl mx-auto translate-y-40">
            {/* Horizontal Line */}
            <WavesBackground />
            <div
              className="absolute w-full h-0.5 bg-white"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            ></div>

            {/* Events */}
            <div className="flex justify-between items-center w-full mt-5">
              {events.map((event, index) => {
                // Determine if the event is 'Ground Zero' to position it above the line
                const isGroundZero = event.name === "Ground Zero";
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    {!isGroundZero && (
                      // Event Text and Dot below the line
                      <div className="flex flex-col items-center relative">
                        <div
                          className="w-6 h-6 bg-white rounded-full absolute"
                          style={{
                            top: "2rem",
                            left: "50%",
                            transform: "translateX(-50%) translateY(180%)",
                          }}
                        ></div>
                        <div
                          className="absolute w-0.5 bg-white"
                          style={{
                            top: "50%",
                            height: "2rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        ></div>
                        <span className="text-white text-center text-3xl font-semibold translate-y-24">
                          {event.name}
                        </span>
                        <div className="text-gray-300 text-center text-sm translate-y-24">
                          {event.date}
                        </div>
                      </div>
                    )}
                    {isGroundZero && (
                      // Event Dot and Text above the line
                      <div className="flex flex-col items-center mb-12">
                        <div className="w-6 h-6 bg-white rounded-full absolute"
                          style={{
                            top: "1.9rem",
                            left: "50%",
                            transform: "translateX(-50%) translateY(-20%)",
                          }}
                        ></div>
                        <span className="text-white text-center text-3xl font-semibold -translate-y-20">
                          {event.name}
                        </span>
                        <div className="text-gray-300 text-sm -translate-y-20">
                          {event.date}
                        </div>
                        <div
                          className="w-0.5 bg-white h-11 absolute"
                          style={{
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(160%)",
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <SectionDivider/>

      </MediaQuery>

    </div>

  );
};

export default Timeline;