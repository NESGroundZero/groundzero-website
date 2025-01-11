import React from 'react';
import "../index.css";
import { pastSponsors, homebackgroundearthvideo } from '../assets';
import NavigationBar from "../components/NavigationBar";
import Footer2 from '../components/Footer2';
import PastEvents from '../components/PastEvents';
import Banner from '../components/Banner';

function PartnersBeforeEvent() {
  return (
    <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
      <NavigationBar className="navbar-special-margin" />
      
      <Banner />

      <div className="pt-20 px-4">
          {/* <PastEvents/> */}
          <div className="sponsors-container">
            <div className="sponsor-level-others">Our Sponsors</div>
            <div className='sponsor-logo-container-s'>
              <img src={pastSponsors} className="mx-auto mt-10 w-full max-w-[300px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto" alt="Sponsor Logo" />
            </div>
          </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default PartnersBeforeEvent;