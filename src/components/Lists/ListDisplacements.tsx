import { DisplacementContext } from "@/contexts/DisplacementContext";
import { CardDisplacement } from "../Cards/CardDisplacement";
import { IDisplacementProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { useContext } from "react";

const ListDisplacements = () => {
  const { displacements } = useContext(DisplacementContext);

  return (
    <ListLayout heading="Deslocamentos cadastrados">
      {displacements.map((displacement: IDisplacementProps) => (
        <CardDisplacement
          displacement={displacement}
          key={displacement.kmInicial}
        />
      ))}
    </ListLayout>
  );
};

export { ListDisplacements };
