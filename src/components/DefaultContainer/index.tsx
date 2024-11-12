import DefaultContainerProps from "./types";
import styles from "./styles.module.scss";

export default function DefaultContainer({ children, className = "", contentClassName = "", withoutHorizontalPadding = false }: DefaultContainerProps) {
  const horizontalPadding = withoutHorizontalPadding ? "" : styles.horizontalPadding; 
  
  return (
    <div className={`${styles.container} ${className} ${horizontalPadding}`}>
      <div className={`${styles.content} ${contentClassName}`}>
        {children}
      </div>
    </div>
  )
}