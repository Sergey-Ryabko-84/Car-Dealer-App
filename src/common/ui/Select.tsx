import React from "react";
import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string | number; name: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, value, onChange, options }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className={styles.select}>
      <option value="">{`-- ${label} --`}</option>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);
