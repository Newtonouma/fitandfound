import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./services.css";

// Import local images
import tailoringImg from "/ourservices/servicesimages/1.jpg";
import alterationsImg from "/ourservices/servicesimages/2.jpg";
import weddingImg from "/ourservices/servicesimages/3.jpg";
import repairsImg from "/ourservices/servicesimages/4.jpg";

const ServicesCarousel = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Custom Tailoring",
      image: tailoringImg,
      description: "We provide high-quality custom-made garments tailored to your fit and style.",
    },
    {
      id: 2,
      title: "Clothing Alterations",
      image: alterationsImg,
      description: "Need resizing or adjustments? Our alteration service ensures the perfect fit.",
    },
    {
      id: 3,
      title: "Wedding Attire",
      image: weddingImg,
      description: "Bespoke bridal gowns and groom suits for your special day.",
    },
    {
      id: 4,
      title: "Repairs",
      image: repairsImg,
      description: "Repair your favorite clothes and bring them back to life.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
      {services.map((service, index) => {
  const positionInGroup = index % 4;
  let borderClass = "";

  if (positionInGroup === 0) {
    borderClass = "bottom-radius-only";
  } else if (positionInGroup === 2) {
    borderClass = "top-radius-only";
  }

  return (
    <div
      key={service.id}
      className={`carousel-slide ${borderClass}`}
      onClick={() => setSelectedService(service)}
    >
      <img src={service.image} alt={service.title} className="carousel-image" />
      <h3 className="carousel-title">{service.title}</h3>
    </div>
  );
})}

      </Slider>

      {/* Modal */}
      {selectedService && (
        <div className="modal" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedService.image} alt={selectedService.title} />
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCarousel;
