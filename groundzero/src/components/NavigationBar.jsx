import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { groundzero } from "../assets/index";
import "../index.css";
import MediaQuery from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = ({ className }) => {
  
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Reset active anchor based on URL hash
    const currentHash = location.hash.replace('#', '');
    setActiveAnchor(currentHash);
  }, [location]); // Re-run effect when location changes

  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  const handleAnchorClick = (anchor) => {
    setActiveAnchor(anchor);
  };



  const Dropdown = () => {
    return (
      <div className="grid place-items-center">
        <div
          className={isOpenDropdown ? "dropdown_menu_open" : "dropdown_menu"}
        >
          <ul>
            <li>
              <Link to="/#about"  onClick={toggleDropdown}>About</Link>
            </li>
            <li>
              <Link to="/#timeline"  onClick={toggleDropdown}>Timeline</Link>
            </li>
            <li>
              <NavLink to="/partners" onClick={toggleDropdown}>Sponsors</NavLink>
            </li>

            <li>
              <Link to="/#eligibility"  onClick={toggleDropdown}>Eligibility</Link>
            </li>

            <li>
              <Link to="/#prizes"  onClick={toggleDropdown}>Prizes</Link>
            </li>
            {/*<li>
              <Link to="/eventschedule"  onClick={toggleDropdown}>Event Schedule</Link>
            </li> */}
            {/* <li>
              <Link to="/benefits"  onClick={toggleDropdown}>Benefits</Link>
            </li> */}
            <li>
              <Link to="/#faq" onClick={toggleDropdown}>FAQ</Link>
            </li>
            <li>
              <a
                href="https://www.eventbrite.sg/e/ground-zero-2024-tickets-796070988757"
                target="_blank"
              >
                <div id="nav-register-button" onClick={toggleDropdown}>Register</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <MediaQuery minWidth={768} >
        <nav className={`nav ${className}`} style={{ backgroundColor: "#00132A" , marginLeft: "-70px"  }}>
          <Link to="/">
            <img src={groundzero} className="md:mt-[10px] h-[40px] object-contain" />
          </Link>
          <ul>
            <li>
          <a href="/#about"
             className={activeAnchor === 'about' ? 'active' : ''}
             onClick={() => handleAnchorClick('about')}>
            About
          </a>
              </li>
            <li>
            <a href="/#timeline"
             className={activeAnchor === 'timeline' ? 'active' : ''}
             onClick={() => handleAnchorClick('timeline')}>
            Timeline
          </a>            
          </li>
          <li>
              <NavLink to="/partners">Sponsors</NavLink>
            </li>
          <li>
            <a href="/#eligibility"
             className={activeAnchor === 'eligibility' ? 'active' : ''}
             onClick={() => handleAnchorClick('eligibility')}>
            Eligibility
          </a>  
         </li>
            <li>
            <a href="/#prizes"
             className={activeAnchor === 'prizes' ? 'active' : ''}
             onClick={() => handleAnchorClick('prizes')}>
            Prizes
          </a>              
           </li>

            {/* <li>
              <NavLink to="/eventschedule">Event Schedule</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/benefits" >Benefits</NavLink>
            </li> */}
            <li>
            <a href="/#faq"
             className={activeAnchor === 'faq' ? 'active' : ''}
             onClick={() => handleAnchorClick('faq')}>
            FAQ
          </a>             
          </li>
            <li>
              <a
                href="https://www.instagram.com/nesgroundzero/?hl=es"
                target="_blank"
              >
                <div id="nav-register-button">Register</div>
              </a>
            </li>
          </ul>
        </nav>
      </MediaQuery>



      <MediaQuery minWidth={1700} >
        <nav className={`nav ${className}`} style={{ backgroundColor: "#00132A" , marginLeft: "-300px"  }}>
          <Link to="/">
            <img src={groundzero} className="md:mt-[10px] h-[40px] object-contain" />
          </Link>
          <ul>
            <li>
          <a href="/#about"
             className={activeAnchor === 'about' ? 'active' : ''}
             onClick={() => handleAnchorClick('about')}>
            About
          </a>
              </li>
            <li>
            <a href="/#timeline"
             className={activeAnchor === 'timeline' ? 'active' : ''}
             onClick={() => handleAnchorClick('timeline')}>
            Timeline
          </a>            
          </li>

          <li>
              <NavLink to="/partners">Sponsors</NavLink>
            </li>
          <li>
            <a href="/#eligibility"
             className={activeAnchor === 'eligibility' ? 'active' : ''}
             onClick={() => handleAnchorClick('eligibility')}>
            Eligibility
          </a>  
         </li>
            <li>
            <a href="/#prizes"
             className={activeAnchor === 'prizes' ? 'active' : ''}
             onClick={() => handleAnchorClick('prizes')}>
            Prizes
          </a>              
           </li>

            <li>
              <NavLink to="/eventschedule">Event Schedule</NavLink>
            </li>
            {/* <li>
              <NavLink to="/benefits" >Benefits</NavLink>
            </li> */}
            <li>
            <a href="/#faq"
             className={activeAnchor === 'faq' ? 'active' : ''}
             onClick={() => handleAnchorClick('faq')}>
            FAQ
          </a>             
          </li>
            <li>
              <a
                href="https://www.eventbrite.sg/e/ground-zero-2024-tickets-796070988757"
                target="_blank"
              >
                <div id="nav-register-button">Register</div>
              </a>
            </li>
          </ul>
        </nav>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <nav className="nav" style={{ backgroundColor: "#00132A" , marginLeft: "-50px" }}>
          <Link to="/">
            { <img src={groundzero} className="h-[40px] w-[100px] object-contain" /> }
          </Link>
          <button>
            {!isOpenDropdown ? (
              <FaBars onClick={toggleDropdown} style={{fontSize:"23", opacity:"60%"}} />
            ) : (
              <FaTimes onClick={toggleDropdown} style={{fontSize:"23", opacity:"60%"}} />
            )}
          </button>
        </nav>

        {isOpenDropdown ? <Dropdown /> : null}
      </MediaQuery>


    </div>
  );
};

export default NavigationBar;
