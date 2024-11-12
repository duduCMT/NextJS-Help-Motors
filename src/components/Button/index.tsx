import ButtonProps from "./types";

import styles from "./styles.module.scss";

export default function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}