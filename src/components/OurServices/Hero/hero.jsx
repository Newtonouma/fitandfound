import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className="hero-video-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/ourservices/hero/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-heading">Our Services</h1>
      </div>
    </div>
  );
}

export default Hero;
