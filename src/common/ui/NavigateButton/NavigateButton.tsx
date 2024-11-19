import Link from "next/link";
import styles from "./NavigateButton.module.css";

type Props = {
  href: string;
  label: string;
  disabled?: boolean;
};

export const NavigateButton = ({ href, label, disabled = false }: Props) => {
  const buttonClass = disabled ? styles.buttonDisabled : styles.buttonEnabled;

  return (
    <Link href={href} passHref>
      <button disabled={disabled} className={`${styles.button} ${buttonClass}`}>
        {label}
      </button>
    </Link>
  );
};
