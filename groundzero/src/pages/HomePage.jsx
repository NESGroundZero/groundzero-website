import React from 'react';
import styles from "../style";
import {
  About,
  Phases,
  AreaOfFocus,
  ProblemStatementCountdown,
  Timeline,
  Eligibility,
  Faq,
  Footer,
  EventSchedule,
  HomePageVideo,
} from "../components";
import PrizeComponent from "../components/HomePageComponents/Prizes";

const HomePage = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          <HomePageVideo />
        </div>
      </div>

      <div className={`bg-primary overflow-hidden ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Phases />
          <AreaOfFocus/>
          <div id="problem-statements">
            <ProblemStatementCountdown /> 
          </div>
          <Timeline/>
          <EventSchedule/>
          <Eligibility />
          <PrizeComponent />
          <Faq/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;