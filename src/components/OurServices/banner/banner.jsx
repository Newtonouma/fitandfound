import React from 'react';
import './Banner.css';

const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-title">
          <h2>Your Style. <span>Tailored to Perfection.</span></h2>
        </div>
        <div className="banner-text">
          <p>
            Whether it's a sharp suit, a dreamy bridal gown, or a wardrobe refresh, 
            we bring your ideas to life with precision, creativity, and unmatched craftsmanship. 
            Let us craft the look that’s uniquely yours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
