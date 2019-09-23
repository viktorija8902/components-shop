import React from "react";

interface Row {
  values: Array<any>;
}

const Row = (prop: Row) => {
  return (
    <div className="Row">
      {prop.values.map(value => (
        <div key={value} className="Row__item">
          {value}
        </div>
      ))}
    </div>
  );
};

export default Row;
