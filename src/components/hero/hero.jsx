import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clothingItems from "../../assets/data/heroclothingdata.json";
import "./hero.css"; 

function ClothingCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024, // for tablets and below
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // for mobile devices
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      

  return (
    <div className="carousel-container">
     
      <Slider {...settings} className="carousel-slider">
        {clothingItems.clothingItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <div className="carousel-image-container">
              <img
                src={item.image}
                alt={item.name}
                className="carousel-item-image"
              />
              <div className="carousel-item-info">
                <h3 className="carousel-item-name">{item.name}</h3>
                <p className="carousel-item-category">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClothingCarousel;
