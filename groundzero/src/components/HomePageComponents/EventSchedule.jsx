import React from "react";
import { SectionDivider, ScreenSizeIndicator } from "../index";
import styles from "../../style";
import EventScheduleCarousel from "../Utility/EventScheduleComponents/EventScheduleCarousel";
import EventScheduleTabs from "../Utility/EventScheduleComponents/EventScheduleTabs";
import EventScheduleThreeColumns from "../Utility/EventScheduleComponents/EventScheduleThreeColumns";

function EventSchedule() {
  return (
    <div id="phases" className="w-full relative">
      <div className={`${styles.paddingX} ${styles.paddingY} text-center justify-center flex flex-col items-center`}>
        <h2 className={styles.heading7 + " pb-14"}>SCHEDULE</h2>
        <h2 className="text-white font-poppins font-lighter md:text-2xl text-xl xs:px-16 lg:px-40 z-10">
          Ground Zero takes place from 13 May to 19 May. However, only Day 1 and Day 7 are mandatory for participants.
        </h2>
        <div className="mt-14"></div>
        {/* Mobile view: Tabs (show on default, hide on md and above) */}
        <div className="block xl:hidden w-full">
          <EventScheduleTabs />
        </div>
        
        {/* Tablet/Small Desktop view: Carousel (hide by default, show on md through lg only) */}
        {/* <div className="hidden md:block xl:hidden w-full">
          <EventScheduleCarousel />
        </div> */}
        
        {/* Large Desktop view: Three Columns (hide by default, show on xl and up) */}
        <div className="hidden xl:block w-full">
          <EventScheduleThreeColumns />
        </div>


      </div>
      <SectionDivider />
    </div>
  );
}

export default EventSchedule;