import { useTextColor } from "@/styles/hooks/useTextColor";

import ParagraphProps from "./types";
import { useParagraphSize } from "./useParagraphSize";

export default function Paragraph({ children, color = "soft-dark", className = "", size = "regular", ...rest }: ParagraphProps) {
  const textColorClass = useTextColor(color);
  const textSizeClass = useParagraphSize(size);

  return (
    <p className={`${textColorClass} ${textSizeClass} ${className}`} {...rest}>
      {children}
    </p>
  )
}