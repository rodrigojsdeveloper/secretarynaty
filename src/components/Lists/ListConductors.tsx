import { ConductorContext } from "@/contexts/ConductorContext";
import { CardConductor } from "../Cards/CardConductor";
import { IConductorProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { useContext } from "react";

const ListConductors = () => {
  const { conductors } = useContext(ConductorContext);

  return (
    <ListLayout heading="Clientes cadastrados">
      {conductors.map((conductor: IConductorProps) => (
        <CardConductor conductor={conductor} key={conductor.nome} />
      ))}
    </ListLayout>
  );
};

export { ListConductors };
