import styles from "../style";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mentors } from '../constants';
import {
  NavigationBar,
  MentorGrid,
  Footer,
  ScreenSizeIndicator,
  SectionDivider,
  Workshops,
  Panelists,
} from "../components";
import Judges from "../components/StakeholdersPageComponents/JudgesComponents/Judges";

/* Main entry point of the web application. */
const StakeholdersPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="bg-purple w-full overflow-hidden">
        <NavigationBar />

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* Our Workshops */}
            <div id="workshops" className={styles.paddingY}>
              <div id="workshops" className={`${styles.heading7} ${styles.paddingY_start_of_page} relative text-center text-white pb-14`}>
                OUR WORKSHOPS
              </div>
              <Workshops />
            </div>

            <SectionDivider spacing={0} />

            {/* Our Judges */}
            <div id="judges" className={styles.paddingY}>
              <div id="judges" className={`${styles.heading7} relative text-white pb-14`}>
                OUR PANELISTS
              </div>

              <div className="grid place-items-center">
                <Judges/>
              </div>
            </div>
            <SectionDivider spacing={0} />


            {/* Our Panelists */}
            <div id="panelists" className={styles.paddingY}>
              <div id="panelists" className={`${styles.heading7} relative text-white pb-14`}>
                OUR PANELISTS
              </div>

              <div className="grid place-items-center">
                <Panelists />
              </div>
            </div>
            <SectionDivider spacing={0} />

            {/* Our Mentors */}
            <div id="mentors" className={styles.paddingY}>
              <div id="mentors" className={styles.heading7 + " relative text-white pb-14"}>
                OUR MENTORS
              </div>
              <div className="grid place-items-center">
                <MentorGrid list={mentors} />
              </div>

            </div>
          </div>

          <div className="bg-white min-h-[20rem]"></div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

      </div>
    </>
  );
};

export default StakeholdersPage;
