import { CardVehicle } from "../Cards/CardVehicle";
import { ListLayout } from "./ListLayout";
import { IVehicleProps } from "@/interfaces";
import { useState } from "react";

const ListVehicle = () => {
  const [vehicles, setVehicles] = useState<Array<IVehicleProps>>([]);

  return (
    <ListLayout heading="Veículos cadastrados">
      {vehicles.map((vehicle: IVehicleProps) => (
        <CardVehicle vehicle={vehicle} key={vehicle.anoFabricacao} />
      ))}
    </ListLayout>
  );
};

export { ListVehicle };
