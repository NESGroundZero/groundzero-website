import React, { useState, useEffect } from 'react';
import styles from '../../style';

const NotificationBar = ({ text, link }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomThreshold = 20 * 16; // Convert 30rem to pixels
      const nearBottom = 
        window.innerHeight + window.scrollY >= 
        document.documentElement.scrollHeight - bottomThreshold;

      if (nearBottom && !isClosing) {
        setIsClosing(true);
        setTimeout(() => setIsVisible(false), 500);
      } else if (!nearBottom && isHidden) {
        setIsVisible(true);
        setIsClosing(false);
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosing, isVisible, isHidden]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 500);
  }

  if (!isVisible) return null;

  return (
    <div className={`w-full bg-blue2 text-white text-center sm:py-3 py-2 fixed bottom-0 z-50 flex justify-between items-center justify-center px-4 
    transition-transform duration-500 ease-in-out 
    ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}>
      <div className="font-poppins font-light flex-1 sm:text-sm text-xs items-center justify-center m-0 p-0">
        {text} {' '}
        <a href={link.href} className="font-poppins font-light underline ml-1 m-0 p-0">
          {link.text}
        </a>
      </div>
      <button 
        className="text-white" 
        onClick={handleClose}
      >
        &times;
      </button>
    </div>
  );
};

NotificationBar.defaultProps = {
  text: "Registration for Ground Zero 2025 is open! Sign up ",
  link: { href: "https://www.eventbrite.sg/e/ground-zero-2025-tickets-1126561468679?aff=oddtdtcreator", text: "here!" }
};

export default NotificationBar;