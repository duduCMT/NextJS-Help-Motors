import HeaderOption from "./components/HeaderOption";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Dev Motors</h1>
        <nav>
          <ul className={styles.items}>
            <HeaderOption 
              title="Home"
              href=""
            />
            <HeaderOption 
              title="Serviços"
              href=""
            />
            <HeaderOption 
              title="Contatos"
              href=""
            />
          </ul>
        </nav>
      </div>
    </header>
  )
}