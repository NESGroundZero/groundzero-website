import React from 'react';
import "../index.css";
import { homebackgroundasteroidhittingearthvideo } from '../assets';
import NavigationBar from "../components/NavigationBar";
import Footer2 from '../components/Footer2';
import Banner from '../components/Banner';
import PastEvents from '../components/PastEvents';
import SponsorsGrid from '../components/SponsorsGrid';
import styles from '../style';

function Partners() {
  return (
    <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
      <NavigationBar className="navbar-special-margin" />

        <Banner videoSrc={homebackgroundasteroidhittingearthvideo}>
          <div className="w-full pt-20 px-4">
            <PastEvents />
          </div>
        </Banner>

        <h1 className= "heading pt-20 pb-10">
          Our Sponsors          
        </h1>

      <div>
        <SponsorsGrid />
      </div>

      <Footer2 />
    </div>
  );
}

export default Partners;
