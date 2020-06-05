import React from "react";

interface Header {
  columnNames: Array<string>;
  onSort: (event: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
  sortedByColumnIndex: number;
}

const Header = (prop: Header) => (
  <thead className="Header">
    <tr className="Header__items">
      {prop.columnNames.map((name, index) => (
        <th
          key={name}
          className={
            index === prop.sortedByColumnIndex
              ? "Header__item Header__item--highlighted"
              : "Header__item"
          }
          id={name}
          onClick={prop.onSort}
        >
          {name}
        </th>
      ))}
    </tr>
  </thead>
);

export default Header;
