import React, { Fragment, useState } from "react";
import { trenches } from "./data";
import Table from "../Common/Table/Table";
import InputField from "../Common/Input/InputField";
import "./trenches.scss";

const Trenches = () => {
  const columnNames = [
    "Name",
    "Location",
    "Depth (m)",
    "How many of you would fit under the ocean?"
  ];
  const [yourHeight, changeHeight] = useState("");
  const [columnIndex, sortBy] = useState(2);
  const [sortedTrenches, updateTrenches] = useState(
    getInitialTrenches(trenches)
  );

  function getInitialTrenches(
    trenches: Array<{
      name: string;
      location: string;
      depth: { meters: number };
    }>
  ) {
    return trenches.slice().map(trench => ({
      ...trench,
      itemsUnderWater: "?"
    }));
  }

  const rows = sortedTrenches.map(trench => [
    trench.name,
    trench.location,
    trench.depth.meters,
    trench.itemsUnderWater
  ]);

  function handleSort(e) {
    const clickedColumn = e.target.id;
    const clickedColumnIndex = columnNames.indexOf(clickedColumn);
    sortBy(clickedColumnIndex);
    if (clickedColumn === "Depth (m)") {
      updateTrenches(sortedTrenches.slice().reverse());
    }
  }

  function handleHeightChange(e) {
    const input = e.target.value;
    changeHeight(input);
    updateTrenches(
      sortedTrenches.map(trench => {
        const height = Number.parseFloat(input);
        if (Number.isNaN(height)) {
          return {
            ...trench,
            itemsUnderWater: "?"
          };
        }
        const itemsUnderWater = trench.depth.meters / height;
        if (Number.isNaN(itemsUnderWater) || itemsUnderWater === Infinity) {
          return {
            ...trench,
            itemsUnderWater: "?"
          };
        }
        return {
          ...trench,
          itemsUnderWater: itemsUnderWater.toFixed(1)
        };
      })
    );
  }

  return (
    <Fragment>
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
      <Table
        columnNames={columnNames}
        rows={rows}
        onSort={handleSort}
        sortedByColumnIndex={columnIndex}
      />
    </Fragment>
  );
};

export default Trenches;
