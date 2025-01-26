import styles from "./style";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  NavigationBar,
  About,
  PastEvents,
  ReasonsToJoin,
  ProblemStatementCountdown,
  ProblemStatements,
  Workshops,
  Eligibility,
  Partners,
  Phases,
  Mentors,
  ContactUs,
  AreaOfFocus,
  Faq,
  Footer,
  HomePage,
  NotificationBar
} from "./components";
import PrizeComponent from "./components/Prizes";
import Timeline from "./components/Timeline";

/* Main entry point of the web application. */
const App = () => {
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
      <NotificationBar />
      <div className="bg-purple w-full overflow-hidden bg-black">
        <NavigationBar />

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <HomePage />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div id = "problem-statements">
              <About />
            </div>
            <Phases />
            <AreaOfFocus/>
            <ProblemStatementCountdown /> 
            <Timeline/>
            <Eligibility />
            <PrizeComponent />
            {/* <ProblemStatements/>          */}
            <Faq/>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
