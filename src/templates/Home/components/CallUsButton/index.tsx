import styles from "./styles.module.scss";

import { PhoneCall } from 'lucide-react';

export default function CallUsButton() {
  return (
    <div className={styles.container}>
      <p className={styles.description}>Fale conosco e conheça nossos serviços</p>
      <button className={styles.button}>
        <PhoneCall color="#fff" size={16} />
        Entrar em contato
      </button>
    </div>
  )
}