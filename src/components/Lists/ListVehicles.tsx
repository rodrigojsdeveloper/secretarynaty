import { CardVehicle } from "../Cards/CardVehicle";
import { IVehicleProps } from "@/interfaces";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Heading } from "./style";
import { useState } from "react";

const ListVehicles = () => {
  const [vehicles, setVehicles] = useState<Array<IVehicleProps>>([]);

  const loadingVehicles = () => {
    api
      .get("Veiculo")
      .then((res) => setVehicles(res.data.reverse()))
      .catch((error) => console.error(error));
  };

  loadingVehicles();

  return (
    <ListLayout heading="Veículos cadastrados">
      {vehicles.length > 0 ? (
        vehicles.map((vehicle: IVehicleProps) => (
          <CardVehicle vehicle={vehicle} key={vehicle.id} />
        ))
      ) : (
        <Heading>Não há veículos</Heading>
      )}
    </ListLayout>
  );
};

export { ListVehicles };
