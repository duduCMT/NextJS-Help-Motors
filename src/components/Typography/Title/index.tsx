import { useTextColor } from "@/styles/hooks/useTextColor";

import styles from "./styles.module.scss";
import TitleProps from "./types";

export default function Title({ children, color = "dark", className = "", ...rest }: TitleProps) {
  const textColorClass = useTextColor(color);

  return (
    <h1 className={`${textColorClass} ${styles.title} ${className}`} {...rest}>
      {children}
    </h1>
  )
}