import React, { Fragment, useState } from "react";
import { trenches } from "./data";
import Table from "../Common/Table/Table";

const Trenches = () => {
  const [columnIndex, sortBy] = useState(2);
  const [sortedTrenches, sortTrenches] = useState(trenches);
  const columnNames = ["Name", "Location", "Depth (in meters)"];

  function handleSort(e) {
    const clickedColumn = e.target.id;
    const clickedColumnIndex = columnNames.indexOf(clickedColumn);
    sortBy(clickedColumnIndex);
    if (clickedColumn === "Depth (in meters)") {
      sortTrenches(sortedTrenches.slice().reverse());
    }
  }

  const rows = sortedTrenches.map(trench => [
    trench.name,
    trench.location,
    trench.depth.meters
  ]);

  return (
    <Fragment>
      <h1 className="Trenches__title">Deepest trenches</h1>
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
