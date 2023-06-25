import { ModalEditDisplacement } from "../ModalEdit/ModalEditDisplacement";
import { IDisplacement, IDisplacementProps } from "@/interfaces";
import { renderFieldValue } from "@/utils/renderFieldValue";
import { formattedDate } from "@/utils/formattedDate";
import { ModalBackground } from "../ModalBackground";
import maps from "../../assets/displacement.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLayout } from "./CardLayout";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { api } from "@/services/api";

const CardDisplacement = ({ displacement }: IDisplacement) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const [showDisplacement, setShowDisplacement] = useState<IDisplacementProps>(
    {} as IDisplacementProps
  );

  let { displacementId } = useParams();

  displacementId = String(displacement.id);

  useEffect(() => {
    api
      .get(`Deslocamento/${displacementId}`)
      .then((res) => setShowDisplacement(res.data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditDisplacement
            id={Number(displacementId)}
            setShowModalEdit={setShowModalEdit}
            data={showDisplacement}
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
            Id: <Result>{renderFieldValue(displacement.id)}</Result>
          </Text>
          <Text>
            KM Inicial:{" "}
            <Result>{renderFieldValue(displacement.kmInicial)}</Result>
          </Text>
          <Text>
            KM Final: <Result>{renderFieldValue(displacement.kmFinal)}</Result>
          </Text>
          <Text>
            Inicio do Des:{" "}
            <Result>
              {renderFieldValue(
                formattedDate(String(displacement.inicioDeslocamento))
              )}
            </Result>
          </Text>
          <Text>
            Fim do Des:{" "}
            <Result>
              {renderFieldValue(
                formattedDate(String(displacement.fimDeslocamento))
              )}
            </Result>
          </Text>
          <Text>
            Check List:{" "}
            <Result>{renderFieldValue(displacement.checkList)}</Result>
          </Text>
          <Text>
            Motivo: <Result>{renderFieldValue(displacement.motivo)}</Result>
          </Text>
          <Text>
            Observação:{" "}
            <Result>{renderFieldValue(displacement.observacao)}</Result>
          </Text>
          <Text>
            ID Condutor:{" "}
            <Result>{renderFieldValue(displacement.idCondutor)}</Result>
          </Text>
          <Text>
            ID Veículo:{" "}
            <Result>{renderFieldValue(displacement.idVeiculo)}</Result>
          </Text>
          <Text>
            ID Cliente:{" "}
            <Result>{renderFieldValue(displacement.idCliente)}</Result>
          </Text>

          <Button
            variant="outlined"
            onClick={() => setShowModalEdit(true)}
            fullWidth
            size="small"
            style={{ color: "#2196f3", borderColor: "#2196f3" }}
          >
            Editar
          </Button>
        </CardLayout>
      )}
    </>
  );
};

export { CardDisplacement };
