import styles from "./styles.module.scss";

export const useTextColor = (theme?: TextTheme) => { 
  if(!theme) {
    return styles.dark;
  }

  switch(theme) {
    case "dark":
      return styles.dark;
    case "soft-dark":
      return styles.softDark;
    case "light":
      return styles.light;
    case "soft-light":
      return styles.softLight;
  }

  return styles.dark;
}