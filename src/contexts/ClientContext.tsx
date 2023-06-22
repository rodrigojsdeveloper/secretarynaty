import { createContext, useState } from "react";
import { IClientProps } from "../interfaces";

interface IClientContextData {
  clients: Array<IClientProps>;
  handleClients: (client: IClientProps) => void;
}

interface IClientContextProvider {
  children: React.ReactNode;
}

export const ClientContext = createContext({} as IClientContextData);

export const ClientContextProvider = ({ children }: IClientContextProvider) => {
  const [clients, setClients] = useState<Array<IClientProps>>([]);

  const handleClients = (client: IClientProps) =>
    setClients([client, ...clients]);

  return (
    <ClientContext.Provider
      value={{
        clients,
        handleClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
