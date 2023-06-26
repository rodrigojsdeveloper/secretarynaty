import { CardVehicle } from "../Cards/CardVehicle";
import { IVehicleProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { ListLayout } from "./ListLayout";
import { api } from "@/services/api";
import { Loaded } from "../Loaded";
import { Heading } from "./style";

const ListVehicles = () => {
  const [vehicles, setVehicles] = useState<Array<IVehicleProps>>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const loadingVehicles = () => {
    api
      .get("Veiculo")
      .then((res) => setVehicles(res.data.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  loadingVehicles();

  useEffect(() => setLoading(true), []);

  return (
    <ListLayout heading="Veículos cadastrados">
      {loading ? (
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
