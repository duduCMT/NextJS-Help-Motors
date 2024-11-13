import { H1Size } from "./types";

import styles from "./styles.module.scss";

export const useTitleSize = (size: H1Size) => {
  switch(size) {
    case "large":
      return styles.titleLarge;
    case "regular":
      return styles.titleRegular;
    default:
      return styles.titleRegular;
  }
}