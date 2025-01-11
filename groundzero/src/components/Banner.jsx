import React from 'react';
import PropTypes from 'prop-types';

function Banner({ videoSrc, children, className }) {
  return (
    <div className={`w-full h-screen overflow-hidden ${className || ''}`}>
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center text-white bg-black/50">
        {children}
      </div>
    </div>
  );
}

Banner.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Banner;