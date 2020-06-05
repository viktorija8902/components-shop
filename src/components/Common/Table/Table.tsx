import React from "react";
import Rows from "./Body";
import Header from "./Header";
import "./table.scss";

interface Table {
  columnNames: Array<string>;
  rows: Array<Array<any>>;
  onSort: (event: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
  sortedByColumnIndex: number;
  onRowClick: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

const Table = (prop: Table) => (
  <table className="Table">
    <caption>World's deepest trenches</caption>
    <Header
      columnNames={prop.columnNames}
      onSort={prop.onSort}
      sortedByColumnIndex={prop.sortedByColumnIndex}
    />
    <Rows
      rows={prop.rows}
      sortedByColumnIndex={prop.sortedByColumnIndex}
      onRowClick={prop.onRowClick}
    />
  </table>
);

export default Table;
