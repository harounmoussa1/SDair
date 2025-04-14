import { Center, Heading } from "@chakra-ui/react";
import { faComments, faGears, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import ProcessModal from "./ProcessModal";

const Process = () => {
  return (
    <div>
      <Center>
        <Heading color="#004F87" fontSize={50} mt={130}>
          Notre Process
        </Heading>
      </Center>

      
      <div className="w-full bg-white px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto justify-items-center">
          <ProcessModal
            title={"Bureau d'étude"}
            subtitle={
              "Préparation des différents plans des produits en utilisant les outils informatiques les plus adéquats avec un personnel bien formé."
            }
            icon={faComments}
          />
          <ProcessModal
            title={"Fabrication"}
            subtitle={
              "Les machines utilisées pour la coupe, le montage par fil ou sans fil et le contrôle sont des opérations bien étudiées et planifiées afin de combiner entre qualité et efficience."
            }
            icon={faGears}
          />
          <ProcessModal
            title={"Entretien"}
            subtitle={
              "Les gaines textiles sont entretenu dans nos locaux et sont traitées pour leur donner une longue vie."
            }
            icon={faScrewdriverWrench}
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
