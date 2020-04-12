import React, { useState } from "react";
import { trenches } from "./data";
import Table from "../Common/Table/Table";
import InputField from "../Common/Input/InputField";
import Gallery from "../Common/Gallery/Gallery";
import "./trenches.scss";

interface GalleryImage {
  src: string;
  alt: string;
}
const Trenches = () => {
  const columnNames = [
    "Name",
    "Location",
    "Depth (m)",
    "How many of you would fit under the ocean?",
  ];
  const [yourHeight, changeHeight] = useState("");
  const [columnIndex, sortBy] = useState(2);
  const [sortedTrenches, updateTrenches] = useState(
    getInitialTrenches(trenches)
  );
  const [trenchImages, updateImages] = useState<Array<GalleryImage>>([]);

  function getInitialTrenches(
    trenches: Array<{
      name: string;
      location: string;
      depth: { meters: number };
    }>
  ) {
    return trenches.slice().map((trench) => ({
      ...trench,
      itemsUnderWater: "?",
    }));
  }

  const rows = sortedTrenches.map((trench) => [
    trench.name,
    trench.location,
    trench.depth.meters,
    trench.itemsUnderWater,
  ]);

  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedColumn = (event.target as HTMLElement).id;
    const clickedColumnIndex = columnNames.indexOf(clickedColumn);
    sortBy(clickedColumnIndex);
    if (clickedColumn === "Depth (m)") {
      updateTrenches(sortedTrenches.slice().reverse());
    }
  };

  const handleHeightChange = (e: { target: { value: string } }) => {
    const input = e.target.value;
    changeHeight(input);
    updateTrenches(
      sortedTrenches.map((trench) => {
        const height = Number.parseFloat(input);
        if (Number.isNaN(height)) {
          return {
            ...trench,
            itemsUnderWater: "?",
          };
        }
        const itemsUnderWater = trench.depth.meters / height;
        if (Number.isNaN(itemsUnderWater) || itemsUnderWater === Infinity) {
          return {
            ...trench,
            itemsUnderWater: "?",
          };
        }
        return {
          ...trench,
          itemsUnderWater: itemsUnderWater.toFixed(1),
        };
      })
    );
  };

  const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const clickedTrenchName = (e.target as HTMLElement).id;
    const clickedTrench = trenches.find(
      (trench) => trench.name === clickedTrenchName
    );
    if (clickedTrench) {
      const newImages = clickedTrench.images.map((image) => ({
        src: `/images/trenches/${image}`,
        alt: `${clickedTrench.name}. ${clickedTrench.location}`,
      }));
      updateImages(newImages);
    }
  };
  return (
    <div className="Trenches">
      <h1 className="Trenches__title">Deepest trenches</h1>
      <p className="Trenches__text">
        Enter height in meters to see how many items would fit under the water.
        It can be your height or height of buildings (e.g. CN Tower's height -
        553 m) or distances (e.g. the distance from home to work - 1 km = 1000
        m).
      </p>
      <InputField
        label="Enter value in m"
        value={yourHeight}
        onInputChange={handleHeightChange}
      />
      <div className="Trenches__body">
        <Table
          columnNames={columnNames}
          rows={rows}
          onSort={handleSort}
          sortedByColumnIndex={columnIndex}
          onRowClick={handleRowClick}
        />
        <Gallery images={trenchImages} />
      </div>
      <small>Data from wikipedia, https://www.britannica.com</small>
    </div>
  );
};

export default Trenches;
