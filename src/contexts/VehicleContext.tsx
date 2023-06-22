import { createContext, useState } from "react";
import { IVehicleProps } from "../interfaces";
import { api } from "@/services/api";

interface IVehicleContextData {
  vehicles: Array<IVehicleProps>;
}

interface IVehicleContextProvider {
  children: React.ReactNode;
}

export const VehicleContext = createContext({} as IVehicleContextData);

export const VehicleContextProvider = ({
  children,
}: IVehicleContextProvider) => {
  const [vehicles, setVehicles] = useState<Array<IVehicleProps>>([]);

  const loadingVehicles = () => {
    api
      .get("Veiculo")
      .then((res) => setVehicles(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingVehicles();

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
