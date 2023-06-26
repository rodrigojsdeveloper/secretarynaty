import { CardConductor } from "../Cards/CardConductor";
import { IConductorProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Loaded } from "../Loaded";
import { Heading } from "./style";

const ListConductors = () => {
  const [conductors, setConductors] = useState<Array<IConductorProps>>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const loadingConductors = () => {
    api
      .get("Condutor")
      .then((res) => setConductors(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  loadingConductors();

  useEffect(() => setLoading(true), []);

  return (
    <ListLayout heading="Condutores cadastrados">
      {loading ? (
        <Loaded />
      ) : conductors.length > 0 ? (
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
