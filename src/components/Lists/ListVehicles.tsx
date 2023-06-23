import { CardVehicle } from "../Cards/CardVehicle";
import { IVehicleProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Loaded } from "../Loaded";
import { Heading } from "./style";

const ListVehicles = () => {
  const [vehicles, setVehicles] = useState<Array<IVehicleProps>>([]);

  const [loaded, setLoaded] = useState<boolean>(false);

  const loadingVehicles = () => {
    setLoaded(true);

    api
      .get("Veiculo")
      .then((res) => setVehicles(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoaded(false));
  };

  useEffect(() => loadingVehicles(), []);

  return (
    <ListLayout heading="Veículos cadastrados">
      {loaded ? (
        <Loaded />
      ) : vehicles.length > 0 ? (
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
