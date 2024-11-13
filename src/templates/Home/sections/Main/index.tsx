import DefaultContainer from "@/components/DefaultContainer";
import Paragraph from "@/components/Typography/Paragraph";
import Title from "@/components/Typography/Title";

import styles from "./styles.module.scss";
import Button from "@/components/Button";
import { Counter } from "../../components/Counter";

export default function Main() {
  return (
    <DefaultContainer className={styles.container} contentClassName={styles.content}>
      <div className={styles.textArea}>
        <Title color="light">
          Se seu carro travar,<br/>
          Help Motors vai ajudar!
        </Title>
        <Paragraph color="soft-light" className={styles.paragraph}>
          Oferecemos serviços automotivos rápidos e confiáveis para manter você sempre em movimento. Se o seu carro apresentar problemas, conte com a nossa equipe especializada para resolver tudo de forma ágil e segura.
        </Paragraph>
        <Button>
          Fale agora!
        </Button>
        <div className={styles.counters}>
          <Counter 
            label="Manutenções de urgência"
            value={500}
            borderLeft
          />
          <Counter 
            label="Clientes atendidos"
            value={3561}
            borderLeft
            borderRight
          />
        </div>
      </div>
      <div className={styles.rectangle} />
      <img
        src="/images/home/home01.png"
        alt="Técnico mecânico"
        className={styles.image}
      />
    </DefaultContainer>
  )
}