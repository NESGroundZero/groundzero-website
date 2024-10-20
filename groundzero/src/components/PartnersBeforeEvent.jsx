import React from 'react';
import "../index.css";
import { pastSponsors } from '../assets';
import NavigationBar from "./NavigationBar";
import Footer2 from './Footer2';
import MediaQuery from 'react-responsive';
import PastEvents from './PastEvents';
import MentorGrid from './MentorGrid';
import { mentors } from '../constants';

function PartnersBeforeEvent() {
  return (
    <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
      <NavigationBar className="navbar-special-margin" />
      <div className="pt-20 px-4">
          <PastEvents/>
          <div className="sponsors-container">
            <div className="sponsor-level-others">Past Sponsors</div>
            <div className='sponsor-logo-container-s'>
              <img src={pastSponsors} className="mx-auto mt-10 max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto" alt="Sponsor Logo" />
            </div>
          </div>

          {/* <div className="sponsors-container">
            <div className="sponsor-level-others">Past Guest of Honor</div>
            <div className='sponsor-logo-container-s mx-auto'>
              <img src={pastSponsors} className="mx-auto mt-10 max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto" alt="Sponsor Logo" />
            </div>
          </div>
          <MentorGrid list={ mentors }/> */}
      </div>

      <Footer2 />
    </div>

  );
}

export default PartnersBeforeEvent;
