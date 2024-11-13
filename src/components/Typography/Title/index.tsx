import { useTextColor } from "@/styles/hooks/useTextColor";

import styles from "./styles.module.scss";
import TitleProps from "./types";
import { useTitleSize } from "./useTitleSize";

export default function Title({ children, color = "dark", className = "", size = "regular", ...rest }: TitleProps) {
  const textColorClass = useTextColor(color);

  const textSizeClass = useTitleSize(size);

  return (
    <h1 className={`${textColorClass} ${textSizeClass} ${className}`} {...rest}>
      {children}
    </h1>
  )
}