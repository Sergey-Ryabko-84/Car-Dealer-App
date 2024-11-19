import styles from "./Select.module.css";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string | number; name: string }[];
};

export const Select = ({ label, value, onChange, options }: Props) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className={styles.select}>
      <option value="">{`-- ${label} --`}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);
