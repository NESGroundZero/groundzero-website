import React from "react";
import "../index.css";
import styles from "../style";
import { nes } from "../assets";
import { aboutUs } from "../constants";
import NavigationBar from "./NavigationBar";


const About = () => {
  return (
    <div id="about"
      className="bg-purple w-full overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingY} ${styles.paddingX} flex-col relative`} id="about">
            <div className="grid place-items-center text-white xs:px-2 lg:px-40">
              <div className="heading">
                <h2 className={styles.heading7 + " mb-4 mt-10 z-10 relative"}>WHY GROUND ZERO</h2>

                <div className="pb-10"></div>
                {aboutUs.map((aboutUs) => (
                  <div key={aboutUs.id} className="font-lighter font-inter md:text-2xl text-[16px] pb-9">
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
    </div>
  );
};

export default About;
