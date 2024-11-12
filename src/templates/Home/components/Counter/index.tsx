import { useTextColor } from "@/styles/hooks/useTextColor";
import CounterProps from "./types";

import styles from "./styles.module.scss";

export function Counter({ label, value, borderLeft = false, borderRight = false }: CounterProps){
  const borderLeftClass = borderLeft ? styles.borderLeft : "";
  const borderRightClass = borderRight ? styles.borderRight : "";


  return (
    <div className={`${styles.container} ${borderLeftClass} ${borderRightClass}`}>
      <div className={styles.content}>
        <span className={styles.value}>{value}</span>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  )
}