import { DisplacementContextProvider } from "./DisplacementContext";
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
        <ConductorContextProvider>
          <DisplacementContextProvider>{children}</DisplacementContextProvider>
        </ConductorContextProvider>
      </ClientContextProvider>
    </VehicleContextProvider>
  );
};

export { Providers };
