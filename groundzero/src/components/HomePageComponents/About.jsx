import React from "react";
import "../../index.css";
import styles from "../../style";
import { aboutUs } from "../../constants";
import BokehBackground from "../Backgrounds/BokehBackground";
import SectionDivider from "../Utility/SectionDivider";
import ScreenSizeIndicator from "../Utility/ScreenSizeIndicator";

const About = () => {
  return (
    <div id="about" className="bg-purple w-full relative">
      <BokehBackground />
      <div className={`bg-primary bg-opacity-90 ${styles.paddingY} ${styles.paddingX} ${styles.flexStart} relative z-10`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex-col relative`}>
            <div className="grid place-items-center text-white xs:px-0 lg:px-30 xl:px-40 relative z-20">
              <div className="heading">
                <h3 className={styles.heading7 + " pb-14 z-10 relative"}>WHY GROUND ZERO</h3>
                {aboutUs.map((aboutUs) => (
                  <div key={aboutUs.id} className="font-lighter font-inter md:text-2xl text-sm pb-9 z-20">
                    <p style={{ textAlign: 'justify', margin: 0, textIndent: '0', paddingLeft: '0'}}>
                      {aboutUs.content}
                    </p>
                  </div>
                ))}
              </div>
    
            </div>
          </div>
        </div>
      </div>
      <SectionDivider/>
    </div>
  );
};

export default About;
