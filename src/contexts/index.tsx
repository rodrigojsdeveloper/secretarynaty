import { VehicleContextProvider } from "./VehicleContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return <VehicleContextProvider>{children}</VehicleContextProvider>;
};

export { Providers };
