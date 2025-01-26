import React, { useState } from 'react';
import styles from '../style';

const NotificationBar = ({ text, link }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 500);
  }

  if (!isVisible) return null;

  return (
    <div className={`w-full bg-blue2 text-white text-center sm:py-3 py-2 fixed bottom-0 z-50 flex justify-between items-center justify-center px-4 
    transition-transform duration-500 ${isClosing ? 'translate-y-full' : ''}`}>
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
  text: "Sign up now and get 50% off with our",
  link: { href: "https://www.eventbrite.sg/e/ground-zero-2025-tickets-1126561468679?aff=oddtdtcreator", text: "Early Bird Sale!" }
};

export default NotificationBar;