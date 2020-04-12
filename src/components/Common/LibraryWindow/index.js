import React, { Fragment } from "react";
//import styled, { withTheme } from '.scss'
import Gallery from "./../Gallery/Gallery";

const LibraryWindow = ({ title, text, images }) => (
  <Fragment>
    <h1>{title}</h1>
    <p>{text}</p>
    {images && <Gallery images={images} />}
  </Fragment>
);

export default LibraryWindow;
