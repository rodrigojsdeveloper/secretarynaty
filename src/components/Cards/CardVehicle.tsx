import { ModalEditVehicle } from "../ModalEdit/ModalEditVehicle";
import { IVehicle, IVehicleProps } from "@/interfaces";
import { ModalBackground } from "../ModalBackground";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLayout } from "./CardLayout";
import car from "../../assets/car.png";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { api } from "@/services/api";

const CardVehicle = ({ vehicle }: IVehicle) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const [showVehicle, setShowVehicle] = useState<IVehicleProps>(
    {} as IVehicleProps
  );

  let { vehicleId } = useParams();

  vehicleId = String(vehicle.id);

  useEffect(() => {
    api
      .get(`Veiculo/${vehicleId}`)
      .then((res) => setShowVehicle(res.data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditVehicle
            id={Number(vehicleId)}
            setShowModalEdit={setShowModalEdit}
            data={showVehicle}
          />
        </ModalBackground>
      ) : (
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
            Marca Modelo: <Result>{vehicle.marcaModelo}</Result>
          </Text>
          <Text>
            Ano de Fabricação: <Result>{vehicle.anoFabricacao}</Result>
          </Text>
          <Text>
            KM Atual: <Result>{vehicle.kmAtual}</Result>
          </Text>

          <Button
            variant="outlined"
            onClick={() => setShowModalEdit(true)}
            fullWidth
          >
            Editar
          </Button>
        </CardLayout>
      )}
    </>
  );
};

export { CardVehicle };
