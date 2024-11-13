import Title from "@/components/Typography/Title";
import CallUsButton from "../../components/CallUsButton";

import styles from "./styles.module.scss";
import Paragraph from "@/components/Typography/Paragraph";

export default function OurServices() {
  return (
    <section className={styles.container}>
      <article className={styles.main}>
        <div className={`${styles.limitContent} ${styles.mainContent}`}>
          <div className={styles.descriptionArea}>
            <Title color="light">
              Conheça nossos serviços automotivos
            </Title>
            <Paragraph color="soft-light">
              Explore nossa variedade de serviços pensados para atender cada necessidade do seu veículo. Navegue e descubra tudo o que oferecemos para garantir que seu carro esteja sempre em ótimo estado e pronto para a estrada!
            </Paragraph>
          </div>
          <div className={styles.contactArea}>
            <CallUsButton />
          </div>
        </div>
      </article>
    </section>
  )
}