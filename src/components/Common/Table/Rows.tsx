import React from "react";
import Row from "./Row";

interface Rows {
  rows: Array<Array<any>>;
  sortedByColumnIndex: number;
  onRowClick: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

const Rows = (prop: Rows) => (
  <tbody className="Rows">
    {prop.rows.map(row => (
      <Row key={Math.random()} values={row} onRowClick={prop.onRowClick} />
    ))}
  </tbody>
);

export default Rows;
