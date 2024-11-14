import Title from "@/components/Typography/Title";
import CallUsButton from "../../components/CallUsButton";

import styles from "./styles.module.scss";
import Paragraph from "@/components/Typography/Paragraph";
import ServiceCard from "@/components/ServiceCard";

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
      <div className={`${styles.listContainer}`}>
        <div className={`${styles.list}`}>
          <ServiceCard 
            title="Transmissão"
            description="Cuidamos da transmissão do seu veículo com precisão e experiência. Realizamos desde trocas de fluido até reparos completos, garantindo que cada marcha funcione suavemente e com eficiência."
            hrefSeeMore="#"
            src="https://images.unsplash.com/photo-1686082260106-d650d2aabab5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ServiceCard 
            title="Transmissão"
            description="Cuidamos da transmissão do seu veículo com precisão e experiência. Realizamos desde trocas de fluido até reparos completos, garantindo que cada marcha funcione suavemente e com eficiência."
            hrefSeeMore="#"
            src="https://images.unsplash.com/photo-1686082260106-d650d2aabab5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ServiceCard 
            title="Transmissão"
            description="Cuidamos da transmissão do seu veículo com precisão e experiência. Realizamos desde trocas de fluido até reparos completos, garantindo que cada marcha funcione suavemente e com eficiência."
            hrefSeeMore="#"
            src="https://images.unsplash.com/photo-1686082260106-d650d2aabab5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ServiceCard 
            title="Transmissão"
            description="Cuidamos da transmissão do seu veículo com precisão e experiência. Realizamos desde trocas de fluido até reparos completos, garantindo que cada marcha funcione suavemente e com eficiência."
            hrefSeeMore="#"
            src="https://images.unsplash.com/photo-1686082260106-d650d2aabab5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  )
}