import React, { Fragment, useState, useEffect } from "react";
import LibraryWindow from "./../Common/LibraryWindow/index";
import { squareWavesImages } from "./data";

const SquareWaves = () => (
  <LibraryWindow
    title="Square waves"
    text={`Can occur anywhere the ocean.
      Most common at the Isle of Rhe in France.
      If you see them, do not go into the water.`}
    images={squareWavesImages}
  />
);

export default SquareWaves;
