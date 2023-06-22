import { ConductorContextProvider } from "./ConductorContext";
import { VehicleContextProvider } from "./VehicleContext";
import { ClientContextProvider } from "./ClientContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <VehicleContextProvider>
      <ClientContextProvider>
        <ConductorContextProvider>{children}</ConductorContextProvider>
      </ClientContextProvider>
    </VehicleContextProvider>
  );
};

export { Providers };
