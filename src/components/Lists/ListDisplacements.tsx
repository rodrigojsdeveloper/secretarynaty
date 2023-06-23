import { CardDisplacement } from "../Cards/CardDisplacement";
import { IDisplacementProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Loaded } from "../Loaded";
import { Heading } from "./style";

const ListDisplacements = () => {
  const [displacements, setDisplacements] = useState<Array<IDisplacementProps>>(
    []
  );

  const [loaded, setLoaded] = useState<boolean>(false);

  const loadingDisplacements = () => {
    setLoaded(true);

    api
      .get("Deslocamento")
      .then((res) => setDisplacements(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoaded(false));
  };

  useEffect(() => loadingDisplacements(), []);

  return (
    <ListLayout heading="Deslocamentos cadastrados">
      {loaded ? (
        <Loaded />
      ) : displacements.length > 0 ? (
        displacements.map((displacement: IDisplacementProps) => (
          <CardDisplacement displacement={displacement} key={displacement.id} />
        ))
      ) : (
        <Heading>Não há deslocamento</Heading>
      )}
    </ListLayout>
  );
};

export { ListDisplacements };
