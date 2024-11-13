import { Car, Wrench, ShieldCheck } from 'lucide-react';

import DefaultContainer from "@/components/DefaultContainer";

import styles from "./styles.module.scss";
import ServiceDescription from "../../components/ServiceDescription";

export default function MainServices() {
  return (
    <DefaultContainer className={styles.container} contentClassName={styles.content}>
      <ServiceDescription 
        title="Trabalhamos com qualquer marca!"
        description="Trabalhamos com suporte para qualquer modelo de carro no mercado. Nossos serviços estão a sua disposição independente da montadora e ano."
        icon={Car}
      />
      <ServiceDescription 
        title="Variedade de serviços"
        description="Encontre tudo o que seu carro precisa em um só lugar! Oferecemos desde manutenção básica até serviços especializados para garantir a sua segurança e conforto na estrada."
        icon={Wrench}
      />
      <ServiceDescription 
        title="Qualidade no suporte"
        description="Conte com uma equipe dedicada e pronta para atender você! Garantimos atenção aos detalhes e suporte de excelência em cada serviço prestado."
        icon={ShieldCheck}
      />
    </DefaultContainer>
  )
}