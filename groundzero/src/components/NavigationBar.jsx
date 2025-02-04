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

    // Scroll to top if path is /partners
    if (location.pathname === '/partners') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }    
  }, [location]); // Re-run effect when location changes

  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  const handleAnchorClick = (anchor) => {
    setActiveAnchor(anchor);
  };

  const navLinks = [
    { href: "/#about", label: "About", anchor: "about" },
    { href: "/#timeline", label: "Timeline", anchor: "timeline" },
    { href: "/#eligibility", label: "Eligibility", anchor: "eligibility" },
    { href: "/#prizes", label: "Prizes", anchor: "prizes" },
    { href: "/partners", label: "Sponsors", isNavLink: true },
    { href: "/#faq", label: "FAQ", anchor: "faq" },
  ];

  const externalLink = {
    href: "https://www.instagram.com/nesgroundzero/?hl=es",
    label: "Discover more",
  };

  const renderNavLinks = (isDropdown = false) => (
    <ul>
      {navLinks.map(({ href, label, anchor, isNavLink }) => (
        <li key={label}>
          {isNavLink ? (
            <NavLink to={href} onClick={isDropdown ? toggleDropdown : null}>{label}</NavLink>
          ) : (
            <a
              href={href}
              className={anchor && activeAnchor === anchor ? 'active' : ''}
              onClick={() => {
                if (anchor) handleAnchorClick(anchor);
                if (isDropdown) toggleDropdown();
              }}
            >
              {label}
            </a>
          )}
        </li>
      ))}
      <li>
        <a href={externalLink.href} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
          <div id="nav-register-button" onClick={isDropdown ? toggleDropdown : null}>{externalLink.label}</div>
        </a>
      </li>
    </ul>
  );

  const renderNav = (minWidth, maxWidth, marginLeft) => (
    <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>
      <nav className={`nav ${className}`} style={{ backgroundColor: "#00132A", marginLeft }}>
        <Link to="/" className="flex items-centre justify-centre h-full">
          <img src={groundzero} className="mt-[10px] h-[40px] object-contain" />
        </Link>
        {renderNavLinks()}
      </nav>
    </MediaQuery>
  );

  return (
    <div>
      {renderNav(768, 1699, "0px")}
      {renderNav(1700, null, "0px")}

      {/* if the window is smaller than 768, then it will be in dropdown format */}
      <MediaQuery maxWidth={768}>
        <nav className="nav" style={{ backgroundColor: "#00132A", marginLeft: "0px" }}>

          <Link to="/" className="flex items-centre justify-centre">
            <img src={groundzero} className="h-[30px] w-[100px] object-contain" />
          </Link>

          <button>
            {!isOpenDropdown ? (
              <FaBars onClick={toggleDropdown} style={{ fontSize: "23", opacity: "60%" }} />
            ) : (
              <FaTimes onClick={toggleDropdown} style={{ fontSize: "23", opacity: "60%" }} />
            )}
          </button>
        </nav>
        {isOpenDropdown && (
          <div className="grid place-items-center">
            <div className={isOpenDropdown ? "dropdown_menu_open" : "dropdown_menu"}>
              {renderNavLinks(true)}
            </div>
          </div>
        )}
      </MediaQuery>
    </div>
  );
};

export default NavigationBar;