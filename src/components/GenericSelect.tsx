import React from "react";
import classes from "./Select.module.scss";

interface GenericProps<T extends string | number> {
  value: T;
  options: T[];
  setValue: (value: T) => void;
}

const GenericSelect = <T extends string | number>({
  value,
  setValue,
  options,
}: GenericProps<T>): React.ReactElement => {
  const handleValueChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.currentTarget;
    setValue(options[selectedIndex]);
  };

  return (
    <select
      className={classes.select}
      value={value}
      onChange={handleValueChange}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default GenericSelect;
