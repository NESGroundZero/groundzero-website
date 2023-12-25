import React from "react";
import { timelineSchedule } from "../constants";
import NavigationBar from "./NavigationBar";
import ReasonsToJoin from "./ReasonsToJoin";
import styles from "../style";

const Timeline = () => {
  return (
    <div className="bg-purple w-full overflow-hidden">
      <NavigationBar />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingY} flex-col relative`} id="about">
            <div className="grid place-items-center text-white xs:px-16 lg:px-40">
              <div className="heading">Timeline</div>
              <div className="my-12 grid place-items-center md:flex md:justify-center ">
                {timelineSchedule.map((event) => (
                  <div className="grid place-items-center md:flex">
                    <div className="flex items-center md:grid md:place-items-center">
                      <div className="absolute -ml-36 md:ml-0">
                        <h2 className="ml-12 xs:ml-4 sm:ml-0 md:ml-0 md:-mt-20 md:text-center xs:text-lg text-xs">
                          {new Date(event.date).toLocaleString("en-US", {
                            dateStyle: "medium",
                          })}
                        </h2>
                      </div>
                      <div className="w-5 h-5 xs:w-12 xs:h-12 rounded-full border-4 border-white"></div>
                      <div className="absolute px-10 xs:px-[100px] ss:px-24 md:px-3 w-20 xs:w-44 ss:w-fit md:w-32 lg:w-40">
                        <div className="md:mt-72 lg:mt-56 md:text-center text-xs xs:text-lg md:text-sm space-y-2 md:space-y-1">
                          {event.title.map((title) => (
                            <div>{title}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        timelineSchedule.indexOf(event) ==
                        timelineSchedule.length - 1
                          ? "hidden"
                          : "block"
                      } grid place-items-center `}
                    >
                      <div className="w-1 h-56 ss:h-32 md:w-[72px] lg:w-24 md:h-1 bg-white"></div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
