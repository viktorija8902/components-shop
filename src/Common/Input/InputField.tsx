import React from "react";

interface InputField {
  label: string;
  onInputChange: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  value: number;
}

const InputField = (prop: InputField) => (
  <input
    className="InputField"
    placeholder={prop.label}
    onChange={prop.onInputChange}
    value={prop.value}
  ></input>
);

export default InputField;
