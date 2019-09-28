import React from "react";
import "./gallery.scss";

interface Gallery {
  images: Array<{ src: string; alt: string }>;
}

const Gallery = (prop: Gallery) => {
  return (
    <div className="Gallery">
      {prop.images.map(image => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Gallery;
