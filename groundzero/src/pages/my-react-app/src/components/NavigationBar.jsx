import React from 'react';
import '../index.css';
import homebackgroundearthvideo from '../assets/homebackgroundearthvideo.mp4';

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src={homebackgroundearthvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="navbar-content">
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;