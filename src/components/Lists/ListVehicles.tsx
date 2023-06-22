import { VehicleContext } from "@/contexts/VehicleContext";
import { CardVehicle } from "../Cards/CardVehicle";
import { IVehicleProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { useContext } from "react";

const ListVehicles = () => {
  const { vehicles } = useContext(VehicleContext);

  return (
    <ListLayout heading="Veículos cadastrados">
      {vehicles.map((vehicle: IVehicleProps) => (
        <CardVehicle vehicle={vehicle} key={vehicle.anoFabricacao} />
      ))}
    </ListLayout>
  );
};

export { ListVehicles };
