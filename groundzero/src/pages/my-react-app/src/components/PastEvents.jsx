import React from 'react';
import '../index.css';
import { homebackgroundearthvideo } from '../assets';

function PastEvents() {
  return (
    <div className="relative w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={homebackgroundearthvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 p-10 text-white">
        <h2 className="text-3xl font-bold">Past Events</h2>
        <p className="mt-4">Details about past events will go here.</p>
      </div>
    </div>
  );
}

export default PastEvents;