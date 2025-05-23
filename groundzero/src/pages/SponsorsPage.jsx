import React, { useEffect, useRef } from 'react';
import "../index.css";
import { homebackgroundasteroidhittingearthvideo, homebackgroundasteroidhittingearthvideo_poster } from '../assets';
import NavigationBar from "../components/Utility/NavigationBar";
import Footer2 from '../components/Utility/Footer2';
import Banner from '../components/Utility/Banner';
import PastEvents from '../components/SponsorsPageComponents/PastEvents';
import SponsorsGrid from '../components/SponsorsPageComponents/SponsorsGrid';
import styles from '../style';

function SponsorsPage() {
  useEffect(() => {
    if (window.location.hash === '#beyond-zero') {
      const element = document.getElementById('beyond-zero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
      <NavigationBar className="navbar-special-margin" />

        <Banner 
          videoSrc={homebackgroundasteroidhittingearthvideo} 
          videoPoster={homebackgroundasteroidhittingearthvideo_poster}
        >
          <div className="w-full pt-20 px-4">
            <PastEvents />
          </div>
        </Banner>

        <div id ="sponsors-content" className={`${styles.paddingY} w-full overflow-hidden`}>
        <h1 className={`${styles.heading7} pb-14`}>
          OUR PARTNERS      
        </h1>

      <div className="flex flex-col">
        <SponsorsGrid id = "beyond-zero"/>
      </div>

        </div>
      <Footer2 />
    </div>
  );
}

export default SponsorsPage;
