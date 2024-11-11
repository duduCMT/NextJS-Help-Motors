import styles from "./styles.module.scss";

type HeaderOptionProps = {
  title: string;
  href: string;
}

export default function HeaderOption({ title, href }: HeaderOptionProps) {
  return (
    <li>
      <a href={href} className={styles.text}>
        {title}
      </a>
    </li>
  )
}