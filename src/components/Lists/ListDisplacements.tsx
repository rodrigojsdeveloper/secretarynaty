import { CardDisplacement } from "../Cards/CardDisplacement";
import { IDisplacementProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Heading } from "./style";
import { useState } from "react";

const ListDisplacements = () => {
  const [displacements, setDisplacements] = useState<Array<IDisplacementProps>>(
    []
  );

  const loadingDisplacements = () => {
    api
      .get("Deslocamento")
      .then((res) => setDisplacements(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingDisplacements();

  return (
    <ListLayout heading="Deslocamentos cadastrados">
      {displacements.length > 0 ? (
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
