import React from "react";

interface InputField {
  label: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
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
