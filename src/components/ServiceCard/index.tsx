import { ChevronRight } from 'lucide-react';

import Paragraph from "../Typography/Paragraph";
import styles from "./styles.module.scss";
import ServiceCardProps from "./types";

export default function ServiceCard({ title, description, hrefSeeMore, src }: ServiceCardProps) {
  return (
    <article className={styles.container}>
      <img src={src} alt={`Imagem de ${title}`} className={styles.image} />
      <span className={styles.title}>
        {title}
      </span>
      <Paragraph size="small">
        {description}
      </Paragraph>
      <a className={styles.seeMoreContainer} href={hrefSeeMore}>
        <p className={styles.seeMore}>
          Ver mais
        </p>
        <ChevronRight size={16} color="#0775FF" />
      </a>
    </article>
  )
}