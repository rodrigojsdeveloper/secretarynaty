import { IDisplacementProps } from "../interfaces";
import { createContext, useState } from "react";
import { api } from "@/services/api";

interface IDisplacementContextData {
  displacements: Array<IDisplacementProps>;
}

interface IDisplacementContextProvider {
  children: React.ReactNode;
}

export const DisplacementContext = createContext(
  {} as IDisplacementContextData
);

export const DisplacementContextProvider = ({
  children,
}: IDisplacementContextProvider) => {
  const [displacements, setDisplacements] = useState<Array<IDisplacementProps>>(
    []
  );

  const loadingDisplacements = () => {
    api
      .get("Deslocamento")
      .then((res) => setDisplacements(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingDisplacements();

  return (
    <DisplacementContext.Provider
      value={{
        displacements,
      }}
    >
      {children}
    </DisplacementContext.Provider>
  );
};
