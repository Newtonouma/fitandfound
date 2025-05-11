import React from "react";
import imageData from "../../assets/data/gallerydata";
import "./gallery.css";

const TailoringGallery = () => {
  return (
    <section className="gallery-container">
      {imageData.map((image) => (
        <div key={image.id} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default TailoringGallery;
