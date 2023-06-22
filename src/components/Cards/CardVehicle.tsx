import { CardLayout } from "./CardLayout";
import car from "../../assets/car.png";
import { Result, Text } from "./style";

interface IVehicle {
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

interface IVehicleComponent {
  vehicle: IVehicle;
}

const CardVehicle = ({ vehicle }: IVehicleComponent) => {
  return (
    <CardLayout alt="Car" src={car}>
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
