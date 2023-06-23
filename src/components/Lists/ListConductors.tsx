import { CardConductor } from "../Cards/CardConductor";
import { IConductorProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Heading } from "./style";
import { useState } from "react";

const ListConductors = () => {
  const [conductors, setConductors] = useState<Array<IConductorProps>>([]);

  const loadingConductors = () => {
    api
      .get("Condutor")
      .then((res) => setConductors(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingConductors();

  return (
    <ListLayout heading="Condutores cadastrados">
      {conductors.length > 0 ? (
        conductors.map((conductor: IConductorProps) => (
          <CardConductor conductor={conductor} key={conductor.id} />
        ))
      ) : (
        <Heading>Não há condutores</Heading>
      )}
    </ListLayout>
  );
};

export { ListConductors };
