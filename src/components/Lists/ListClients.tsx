import { CardClient } from "../Cards/CardClient";
import { useEffect, useState } from "react";
import { IClientProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Loaded } from "../Loaded";
import { Heading } from "./style";

const ListClients = () => {
  const [clients, setClients] = useState<Array<IClientProps>>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const loadingClients = () => {
    api
      .get("Cliente")
      .then((res) => setClients(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  loadingClients();

  useEffect(() => setLoading(true), []);

  return (
    <ListLayout heading="Clientes cadastrados">
      {loading ? (
        <Loaded />
      ) : clients.length > 0 ? (
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
