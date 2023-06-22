import { IDisplacementProps } from "../interfaces";
import { createContext, useState } from "react";

interface IDisplacementContextData {
  displacements: Array<IDisplacementProps>;
  handleDisplacements: (displacement: IDisplacementProps) => void;
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

  const handleDisplacements = (displacement: IDisplacementProps) =>
    setDisplacements([displacement, ...displacements]);

  return (
    <DisplacementContext.Provider
      value={{
        displacements,
        handleDisplacements,
      }}
    >
      {children}
    </DisplacementContext.Provider>
  );
};
