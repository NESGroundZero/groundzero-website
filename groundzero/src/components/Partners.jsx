import React from 'react';
import "../index.css";
import { mapletree, metacamp, fomopay, skilledin, ncs,nuse, lumos, visionpal, broskin, bumpp, simplebooth, centrep, boulder, mobio, nussu, airalo, pdtsponsors, communitypartners} from '../assets';
import NavigationBar from "./NavigationBar";
import Footer2 from './Footer2';
import MediaQuery from 'react-responsive';
import FOMOPayDetails from './FomoPay';



function Partners() {
    return (
      <div className="bg-darkBlue w-full overflow-hidden min-h-screen">

      <NavigationBar    className="navbar-special-margin" />
      <div className="pt-20 pb-10 px-4">
          <h1 className="font-poppins text-white text-center text-5xl mt-10 font-light ">
SPONSORS          </h1>
<MediaQuery minWidth={769}>
<div className="sponsors-container">
<div className="sponsor-level">Patron Sponsors</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
              <a href="https://www.mapletree.com.sg" target="_blank" rel="noopener noreferrer"> 
                <img src={mapletree} className="sponsor-logo" />
                </a>
                </div>
                <div className="sponsor-description">
                    <h1>About Mapletree:</h1>
                    <p>
                    Headquartered in Singapore, Mapletree is a global real estate development, investment, capital and property management company committed to sustainability. Its strategic focus is to invest in markets and real estate sectors with good growth potential. By combining its key strengths, the Group has established a track record of award-winning projects, and delivers consistent and high returns across real estate asset classes.
                    <br></br>
<br></br>
The Group manages three Singapore-listed real estate investment trusts (“REITs”) and eight private equity real estate funds, which hold a diverse portfolio of assets in Asia Pacific, Europe, the United Kingdom (“UK”) and the United States (“US”). 
<br>
</br>
<br></br>
The Group’s assets are located across 13 markets globally, namely Singapore, Australia, Canada, China, Europe, Hong Kong SAR, India, Japan, Malaysia, South Korea, the UK, the US and Vietnam. To support its global operations, Mapletree has established an extensive network of offices in these countries.
                    </p>
                    <p></p>
                </div>
                <br>
                </br> <br></br>
                <div className='sponsor-logo-container'>
              <a href="https://enterprise.nus.edu.sg/" target="_blank" rel="noopener noreferrer"> 
                <img src={nuse} className="sponsor-logo-sg" />
                </a>
                </div>
                <div className="sponsor-description">
                    <h1>About NUS Enterprise:</h1>
                    <p>
                    NUS Enterprise, the entrepreneurial arm of the National University of Singapore (NUS), plays a pivotal role in advancing innovation and entrepreneurship at NUS and beyond.                    <br></br>
<br></br>
It actively promotes entrepreneurship and cultivates global mind-sets and talents through the synergies of experiential entrepreneurial education, active industry partnerships, holistic entrepreneurship support and catalytic entrepreneurship outreach. <br>
</br>
<br></br>
Its initiatives and global connections support a range of entrepreneurial journeys and foster ecosystem building in new markets. These initiatives augment and complement the University’s academic programmes and act as a unique bridge to industry well beyond Singapore’s shores.                    </p>
                    <p></p>
                </div>

            </div>
            <div className="sponsors-container">
            <div className="sponsor-level-gold">Diamond Sponsor</div>
            <br>
      </br>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
              <a href="https://www.ncs.co" target="_blank" rel="noopener noreferrer">
        <img src={ncs} className="sponsor-logo-sg" alt="NCS Logo" />
      </a>
    
                <div className="sponsor-description">
                  <br></br>
                  <br></br>
                    <h1>About NCS:</h1>
                    <p>
                    NCS is a leading technology services firm with a presence in Asia Pacific and partners with governments and enterprises to advance communities through technology. Combining the experience of its 10,000-strong team and 50 years of history in Singapore, NCS is a global player in providing end-to-end technology services and solutions.
                    </p>
                </div>
                </div>
                </div>
        </div>
            <div className="sponsors-container">
            <div className="sponsor-level-gold">Gold Sponsor</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
                <a href = "https://www.fomopay.com" target="_blank" rel="noopener noreferrer">
                <img src={fomopay} className="sponsor-logo" />

                </a>
                <div className="sponsor-description">
                  <br></br>
                  <br></br>
                    <p>
<FOMOPayDetails></FOMOPayDetails>           
                    </p>
                </div>
                </div>
                </div>
        </div>

        <div className="sponsors-container">
            <div className="sponsor-level-silver">Silver Sponsors</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container-s'>
                <img src={metacamp} className="sponsor-logo" />
                <img src={skilledin} className="sponsor-logo-sg" />

                </div>
                </div>
        </div>
        <div className="sponsors-container">
            <div className="sponsor-level-silver">Product Sponsors</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container-s'>
                <img src={pdtsponsors} className="sponsorpdl-logo" />
                {/* <img src={visionpal} className="sponsor-logo" />
                <img src={broskin} className="sponsor-logo" /> */}

    

                </div>
                </div>
        </div>

        <div className="sponsors-container">
            <div className="sponsor-level-silver">Community Partners</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container-s'>
                <img src={communitypartners} className="sponsorpdl-logo" />
                {/* <img src={visionpal} className="sponsor-logo" />
                <img src={broskin} className="sponsor-logo" /> */}

    

                </div>
                </div>
        </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          
        <div className="sponsors-container">
<div className="sponsor-level">Patron Sponsors</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
              <a href="https://www.mapletree.com.sg" target="_blank" rel="noopener noreferrer"> 
                <img src={mapletree} className="sponsor-logo" />
                </a>
                </div>
                <div className="sponsor-description">
                    <h1>About Mapletree:</h1>
                    <p>
                    Headquartered in Singapore, Mapletree is a global real estate development, investment, capital and property management company committed to sustainability. Its strategic focus is to invest in markets and real estate sectors with good growth potential. By combining its key strengths, the Group has established a track record of award-winning projects, and delivers consistent and high returns across real estate asset classes.
                    <br></br>
<br></br>
The Group manages three Singapore-listed real estate investment trusts (“REITs”) and eight private equity real estate funds, which hold a diverse portfolio of assets in Asia Pacific, Europe, the United Kingdom (“UK”) and the United States (“US”). 
<br>
</br>
<br></br>
The Group’s assets are located across 13 markets globally, namely Singapore, Australia, Canada, China, Europe, Hong Kong SAR, India, Japan, Malaysia, South Korea, the UK, the US and Vietnam. To support its global operations, Mapletree has established an extensive network of offices in these countries.
                    </p>
                    <p></p>
                </div>
                <br>
                </br> <br></br>
                <div className='sponsor-logo-container'>
              <a href="https://enterprise.nus.edu.sg/" target="_blank" rel="noopener noreferrer"> 
                <img src={nuse} className="sponsor-logo-sg" />
                </a>
                </div>
                <div className="sponsor-description">
                    <h1>About NUS Enterprise:</h1>
                    <p>
                    NUS Enterprise, the entrepreneurial arm of the National University of Singapore (NUS), plays a pivotal role in advancing innovation and entrepreneurship at NUS and beyond.                    <br></br>
<br></br>
It actively promotes entrepreneurship and cultivates global mind-sets and talents through the synergies of experiential entrepreneurial education, active industry partnerships, holistic entrepreneurship support and catalytic entrepreneurship outreach. <br>
</br>
<br></br>
Its initiatives and global connections support a range of entrepreneurial journeys and foster ecosystem building in new markets. These initiatives augment and complement the University’s academic programmes and act as a unique bridge to industry well beyond Singapore’s shores.                    </p>
                    <p></p>
                </div>

            </div>
            <div className="sponsors-container">
            <div className="sponsor-level-gold">Diamond Sponsor</div>
            <br>
      </br>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
              <a href="https://www.ncs.co" target="_blank" rel="noopener noreferrer">
        <img src={ncs} className="sponsor-logo-sg" alt="NCS Logo" />
      </a>
    
                <div className="sponsor-description">
                  <br></br>
                  <br></br>
                    <h1>About NCS:</h1>
                    <p>
                    NCS is a leading technology services firm with a presence in Asia Pacific and partners with governments and enterprises to advance communities through technology. Combining the experience of its 10,000-strong team and 50 years of history in Singapore, NCS is a global player in providing end-to-end technology services and solutions.
                    </p>
                </div>
                </div>
                </div>
        </div>
            <div className="sponsors-container">
            <div className="sponsor-level-gold">Gold Sponsor</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
                <a href = "https://www.fomopay.com" target="_blank" rel="noopener noreferrer">
                <img src={fomopay} className="sponsor-logo" />

                </a>
                <div className="sponsor-description">
                  <br></br>
                  <br></br>
<p>
<FOMOPayDetails></FOMOPayDetails>           

                    </p>
                </div>
                </div>
                </div>
        </div>

        <div className="sponsors-container">
            <div className="sponsor-level-silver">Silver Sponsors</div>
            <div className="sponsor-content-mobile">
              <div className='sponsor-logo-mobile'>
                <img src={metacamp} className="sponsor-logo" />
                <br></br>
                <br></br>
                <img src={skilledin} className="sponsor-logo-sg" />

                </div>
                </div>
        </div>

        <div className="sponsors-container">
            <div className="sponsor-level-others">Product Sponsors</div>
            <div className="sponsor1-content-mobile">
              <div className='sponsor-logo-container-s'>
                <img src={pdtsponsors} className="sponsorpd-logo" />
                {/* <img src={visionpal} className="sponsor-logo" />
                <img src={broskin} className="sponsor-logo" /> */}

    

                </div>
                </div>
        </div>

        <div className="sponsors-container">
            <div className="sponsor-level-others">Community Partners</div>
            <div className="sponsor1-content-mobile">
              <div className='sponsor-logo-container-s'>
                <img src={communitypartners} className="sponsorpd-logo" />
                {/* <img src={visionpal} className="sponsor-logo" />
                <img src={broskin} className="sponsor-logo" /> */}

    

                </div>
                </div>
        </div>
        </div>

          </MediaQuery>
        </div>
        <Footer2/>
        
        </div>
        
    );
}

export default Partners;
