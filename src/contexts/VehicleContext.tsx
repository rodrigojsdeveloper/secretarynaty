import { createContext, useState } from "react";
import { IVehicleProps } from "../interfaces";

interface IVehicleContextData {
  vehicles: Array<IVehicleProps>;
  handleVehicles: (vehicle: IVehicleProps) => void;
}

interface IVehicleContextProvider {
  children: React.ReactNode;
}

export const VehicleContext = createContext({} as IVehicleContextData);

export const VehicleContextProvider = ({
  children,
}: IVehicleContextProvider) => {
  const [vehicles, setVehicles] = useState<Array<IVehicleProps>>([]);

  const handleVehicles = (vehicle: IVehicleProps) =>
    setVehicles([vehicle, ...vehicles]);

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        handleVehicles,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
