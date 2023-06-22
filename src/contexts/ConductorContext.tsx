import { createContext, useState } from "react";
import { IConductorProps } from "../interfaces";
import { api } from "@/services/api";

interface IConductorContextData {
  conductors: Array<IConductorProps>;
}

interface IConductorContextProvider {
  children: React.ReactNode;
}

export const ConductorContext = createContext({} as IConductorContextData);

export const ConductorContextProvider = ({
  children,
}: IConductorContextProvider) => {
  const [conductors, setConductors] = useState<Array<IConductorProps>>([]);

  const loadingConductors = () => {
    api
      .get("Condutor")
      .then((res) => setConductors(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingConductors();

  return (
    <ConductorContext.Provider
      value={{
        conductors,
      }}
    >
      {children}
    </ConductorContext.Provider>
  );
};
