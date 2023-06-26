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

  const [loading, setLoading] = useState<boolean>(false);

  const loadingDisplacements = () => {
    api
      .get("Deslocamento")
      .then((res) => setDisplacements(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  loadingDisplacements();

  useEffect(() => setLoading(true), []);

  return (
    <ListLayout heading="Deslocamentos cadastrados">
      {loading ? (
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
