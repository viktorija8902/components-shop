import React from "react";
import Rows from "./Rows";
import Header from "./Header";
import "./table.scss";

interface Table {
  columnNames: Array<string>;
  rows: Array<Array<any>>;
  onSort: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sortedByColumnIndex: number;
}

const Table = (prop: Table) => (
  <div className="Table">
    <Header
      columnNames={prop.columnNames}
      onSort={prop.onSort}
      sortedByColumnIndex={prop.sortedByColumnIndex}
    />
    <Rows rows={prop.rows} sortedByColumnIndex={prop.sortedByColumnIndex} />
  </div>
);

export default Table;
