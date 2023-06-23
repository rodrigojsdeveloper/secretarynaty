import { CardConductor } from "../Cards/CardConductor";
import { IConductorProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Loaded } from "../Loaded";
import { Heading } from "./style";

const ListConductors = () => {
  const [conductors, setConductors] = useState<Array<IConductorProps>>([]);

  const [loaded, setLoaded] = useState<boolean>(false);

  const loadingConductors = () => {
    setLoaded(true);

    api
      .get("Condutor")
      .then((res) => setConductors(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoaded(false));
  };

  useEffect(() => loadingConductors(), []);

  return (
    <ListLayout heading="Condutores cadastrados">
      {loaded ? (
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
