import React from "react";
import Row from "./Row";

interface Rows {
  rows: Array<Array<any>>;
  sortedByColumnIndex: number;
}

const Rows = (prop: Rows) => (
  <div className="Rows">
    {prop.rows.map(row => (
      <Row key={Math.random()} values={row} />
    ))}
  </div>
);

export default Rows;
