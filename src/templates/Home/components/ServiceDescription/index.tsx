import { CircleHelp } from 'lucide-react';

import ServiceDescriptionProps from "./types";
import styles from "./styles.module.scss";

export default function ServiceDescription({ description, title, icon: Icon }: ServiceDescriptionProps) {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.iconContainer}>
          {Icon ? <Icon color="#ffffff" /> : <CircleHelp color="#ffffff" />}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </section>
    </div>
  )
}