import React from "react";
import classes from "./Select.module.scss";

interface Props {
  value: string;
  options: string[];
  setValue: (value: string) => void;
}

const Select: React.FC<Props> = ({ value, setValue, options }) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Select;
