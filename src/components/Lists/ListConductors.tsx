import { CardConductor } from "../Cards/CardConductor";
import { IConductorProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
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
      {conductors.map((conductor: IConductorProps) => (
        <CardConductor conductor={conductor} key={conductor.id} />
      ))}
    </ListLayout>
  );
};

export { ListConductors };
