import { ModalEditDisplacement } from "../ModalEdit/ModalEditDisplacement";
import { formattedDate } from "@/utils/formattedDate";
import { ModalBackground } from "../ModalBackground";
import maps from "../../assets/displacement.png";
import { useParams } from "react-router-dom";
import { IDisplacement } from "@/interfaces";
import { CardLayout } from "./CardLayout";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { useState } from "react";

const CardDisplacement = ({ displacement }: IDisplacement) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  let { displacementId } = useParams();

  displacementId = String(displacement.id);

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditDisplacement
            id={Number(displacementId)}
            setShowModalEdit={setShowModalEdit}
          />
        </ModalBackground>
      ) : (
        <CardLayout
          alt="Maps"
          src={maps}
          heading="Deslocamento"
          parameter="Deslocamento"
          id={Number(displacementId)}
        >
          <Text>
            KM Inicial: <Result>{displacement.kmInicial}</Result>
          </Text>
          <Text>
            In. do Deslocamento:{" "}
            <Result>
              {formattedDate(String(displacement.inicioDeslocamento))}
            </Result>
          </Text>
          <Text>
            Check List: <Result>{displacement.checkList}</Result>
          </Text>
          <Text>
            Motivo: <Result>{displacement.motivo}</Result>
          </Text>
          <Text>
            Observação: <Result>{displacement.observacao}</Result>
          </Text>
          <Text>
            ID Condutor: <Result>{displacement.idCondutor}</Result>
          </Text>
          <Text>
            ID Veículo: <Result>{displacement.idVeiculo}</Result>
          </Text>
          <Text>
            ID Cliente: <Result>{displacement.idCliente}</Result>
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

export { CardDisplacement };
