import React from 'react';
import '../index.css';
import { homebackgroundearthvideo } from '../assets';

function Footer2() {
  return (
    <div className="relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={homebackgroundearthvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 p-4 text-white text-center">
        <h2 className="text-2xl font-bold">Footer Content</h2>
        <p>Some additional information or links can go here.</p>
      </div>
    </div>
  );
}

export default Footer2;