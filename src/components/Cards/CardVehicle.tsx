import { useParams } from "react-router-dom";
import { CardLayout } from "./CardLayout";
import { IVehicle } from "@/interfaces";
import car from "../../assets/car.png";
import { Result, Text } from "./style";

const CardVehicle = ({ vehicle }: IVehicle) => {
  let { vehicleId } = useParams();

  vehicleId = String(vehicle.id);

  return (
    <CardLayout
      alt="Car"
      src={car}
      heading="Veículo"
      parameter="Veiculo"
      id={Number(vehicleId)}
    >
      <Text>
        Placa: <Result>{vehicle.placa}</Result>
      </Text>
      <Text>
        Marca do Modelo: <Result>{vehicle.marcaModelo}</Result>
      </Text>
      <Text>
        Ano de Fabricação: <Result>{vehicle.anoFabricacao}</Result>
      </Text>
      <Text>
        KM Atual: <Result>{vehicle.kmAtual}</Result>
      </Text>
    </CardLayout>
  );
};

export { CardVehicle };
