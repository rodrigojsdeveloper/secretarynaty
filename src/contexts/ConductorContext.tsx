import { createContext, useState } from "react";
import { IConductorProps } from "../interfaces";

interface IConductorContextData {
  conductors: Array<IConductorProps>;
  handleConductors: (conductor: IConductorProps) => void;
}

interface IConductorContextProvider {
  children: React.ReactNode;
}

export const ConductorContext = createContext({} as IConductorContextData);

export const ConductorContextProvider = ({
  children,
}: IConductorContextProvider) => {
  const [conductors, setConductors] = useState<Array<IConductorProps>>([]);

  const handleConductors = (conductor: IConductorProps) =>
    setConductors([conductor, ...conductors]);

  return (
    <ConductorContext.Provider
      value={{
        conductors,
        handleConductors,
      }}
    >
      {children}
    </ConductorContext.Provider>
  );
};
