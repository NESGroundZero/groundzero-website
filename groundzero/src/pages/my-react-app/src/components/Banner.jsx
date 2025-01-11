import React from 'react';
import '../index.css';
import { homebackgroundearthvideo } from '../assets';

function Banner() {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={homebackgroundearthvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-3xl font-bold">Welcome to Our Event</h1>
      </div>
    </div>
  );
}

export default Banner;