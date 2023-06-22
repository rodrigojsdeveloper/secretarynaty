import { ClientContext } from "@/contexts/ClientContext";
import { CardClient } from "../Cards/CardClient";
import { IClientProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { useContext } from "react";

const ListClients = () => {
  const { clients } = useContext(ClientContext);

  return (
    <ListLayout heading="Clientes cadastrados">
      {clients.map((client: IClientProps) => (
        <CardClient client={client} key={client.nome} />
      ))}
    </ListLayout>
  );
};

export { ListClients };
