import styles from "../style";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mentors } from '../constants';
import {
  NavigationBar,
  MentorGrid,
  Footer,
} from "../components";

/* Main entry point of the web application. */
const MentorPage = () => {
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

        <div className={`bg-primary ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="heading mt-8 ss:mt-0">
                Ground Zero Mentors
            </div>
            <div className="grid place-items-center">
              <MentorGrid list = { mentors } />
            </div>
          </div>
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

export default MentorPage;
