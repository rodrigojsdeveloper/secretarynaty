import { CardClient } from "../Cards/CardClient";
import { IClientProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Heading } from "./style";
import { useState } from "react";

const ListClients = () => {
  const [clients, setClients] = useState<Array<IClientProps>>([]);

  const loadingClients = () => {
    api
      .get("Cliente")
      .then((res) => setClients(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingClients();

  return (
    <ListLayout heading="Clientes cadastrados">
      {clients.length > 0 ? (
        clients.map((client: IClientProps) => (
          <CardClient client={client} key={client.id} />
        ))
      ) : (
        <Heading>Não há clientes</Heading>
      )}
    </ListLayout>
  );
};

export { ListClients };
