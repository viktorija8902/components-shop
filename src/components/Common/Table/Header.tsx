import React from "react";

interface Header {
  columnNames: Array<string>;
  onSort: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sortedByColumnIndex: number;
}

const Header = (prop: Header) => (
  <thead className="Header">
    <tr className="Header__items">
      {prop.columnNames.map((name, index) => (
        <button
          key={name}
          id={name}
          onClick={prop.onSort}
          className={
            index === prop.sortedByColumnIndex
              ? "Header__item Header__item--highlighted"
              : "Header__item"
          }
        >
          {name}
        </button>
      ))}
    </tr>
  </thead>
);

export default Header;
