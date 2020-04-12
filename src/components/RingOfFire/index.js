import React from "react";
import LibraryWindow from "./../Common/LibraryWindow/index";
import { ringOfFireImages } from "./data";

const RingOfFire = () => (
  <LibraryWindow
    title="Ring of Fire"
    text={`Areas where most earthquakes happen. In these areas ocean is the deepest. See Trenches section.`}
    images={ringOfFireImages}
  />
);

export default RingOfFire;
