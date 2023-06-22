import { VehicleContextProvider } from "./VehicleContext";
import { ClientContextProvider } from "./ClientContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <VehicleContextProvider>
      <ClientContextProvider>{children}</ClientContextProvider>
    </VehicleContextProvider>
  );
};

export { Providers };
