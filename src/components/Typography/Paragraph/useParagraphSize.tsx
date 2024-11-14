import { ParagraphSize } from "./types";

import styles from "./styles.module.scss";

export const useParagraphSize = (size: ParagraphSize) => {
  switch(size) {
    case "small":
      return styles.paragraphSmall;
    case "regular":
      return styles.paragraphRegular;
    default:
      return styles.paragraphRegular;
  }
}