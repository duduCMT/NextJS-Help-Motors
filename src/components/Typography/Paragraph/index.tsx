import { useTextColor } from "@/styles/hooks/useTextColor";

import styles from "./styles.module.scss";
import ParagraphProps from "./types";

export default function Paragraph({ children, color = "soft-dark", className = "", ...rest }: ParagraphProps) {
  const textColorClass = useTextColor(color);

  return (
    <p className={`${textColorClass} ${styles.paragraph} ${className}`} {...rest}>
      {children}
    </p>
  )
}