import React from "react";

interface Row {
  values: Array<any>;
  onRowClick: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

const Row = (prop: Row) => {
  return (
    <tr className="Row" onClick={prop.onRowClick}>
      {prop.values.map(value => (
        <td key={value} id={prop.values[0]} className="Row__item">
          {value}
        </td>
      ))}
    </tr>
  );
};

export default Row;
