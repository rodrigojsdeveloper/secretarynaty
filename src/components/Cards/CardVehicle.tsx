import { ModalEditVehicle } from "../ModalEdit/ModalEditVehicle";
import { ModalBackground } from "../ModalBackground";
import { useParams } from "react-router-dom";
import { CardLayout } from "./CardLayout";
import { IVehicle } from "@/interfaces";
import car from "../../assets/car.png";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { useState } from "react";

const CardVehicle = ({ vehicle }: IVehicle) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  let { vehicleId } = useParams();

  vehicleId = String(vehicle.id);

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditVehicle
            id={Number(vehicleId)}
            setShowModalEdit={setShowModalEdit}
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
            Marca do Modelo: <Result>{vehicle.marcaModelo}</Result>
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
