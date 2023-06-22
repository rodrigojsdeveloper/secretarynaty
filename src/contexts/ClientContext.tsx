import { createContext, useState } from "react";
import { IClientProps } from "../interfaces";
import { api } from "@/services/api";

interface IClientContextData {
  clients: Array<IClientProps>;
}

interface IClientContextProvider {
  children: React.ReactNode;
}

export const ClientContext = createContext({} as IClientContextData);

export const ClientContextProvider = ({ children }: IClientContextProvider) => {
  const [clients, setClients] = useState<Array<IClientProps>>([]);

  const loadingClients = () => {
    api
      .get("Cliente")
      .then((res) => setClients(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingClients();

  return (
    <ClientContext.Provider
      value={{
        clients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
