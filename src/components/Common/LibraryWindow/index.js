import React from "react";
import Gallery from "./../Gallery/Gallery";

const LibraryWindow = ({ title, text, images }) => (
  <article>
    <h1>{title}</h1>
    <p>{text}</p>
    {images && <Gallery images={images} />}
  </article>
);

export default LibraryWindow;
