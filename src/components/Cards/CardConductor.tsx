import { ModalEditConductor } from "../ModalEdit/ModalEditConductor";
import { renderFieldValue } from "@/utils/renderFieldValue";
import { IConductor, IConductorProps } from "@/interfaces";
import { formattedDate } from "@/utils/formattedDate";
import { ModalBackground } from "../ModalBackground";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { api } from "@/services/api";

const CardConductor = ({ conductor }: IConductor) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const [showConductor, setShowConductor] = useState<IConductorProps>(
    {} as IConductorProps
  );

  let { conductorId } = useParams();

  conductorId = String(conductor.id);

  useEffect(() => {
    api
      .get(`Condutor/${conductorId}`)
      .then((res) => setShowConductor(res.data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditConductor
            id={Number(conductorId)}
            setShowModalEdit={setShowModalEdit}
            data={showConductor}
          />
        </ModalBackground>
      ) : (
        <CardLayout
          alt="User"
          src={user}
          heading="Condutor"
          parameter="Condutor"
          id={Number(conductorId)}
        >
          <Text>
            Id: <Result>{renderFieldValue(conductor.id)}</Result>
          </Text>
          <Text>
            Nome: <Result>{renderFieldValue(conductor.nome)}</Result>
          </Text>
          <Text>
            N. da Hab:{" "}
            <Result>{renderFieldValue(conductor.numeroHabilitacao)}</Result>
          </Text>
          <Text>
            Cat. da Hab:{" "}
            <Result>{renderFieldValue(conductor.catergoriaHabilitacao)}</Result>
          </Text>
          <Text>
            Ven. da Hab:{" "}
            <Result>
              {renderFieldValue(
                formattedDate(String(conductor.vencimentoHabilitacao))
              )}
            </Result>
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

export { CardConductor };
