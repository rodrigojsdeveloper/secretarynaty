import { ModalEditConductor } from "../ModalEdit/ModalEditConductor";
import { formattedDate } from "@/utils/formattedDate";
import { ModalBackground } from "../ModalBackground";
import { useParams } from "react-router-dom";
import { IConductor } from "@/interfaces";
import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { useState } from "react";

const CardConductor = ({ conductor }: IConductor) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  let { conductorId } = useParams();

  conductorId = String(conductor.id);

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditConductor
            id={Number(conductorId)}
            setShowModalEdit={setShowModalEdit}
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
            Nome: <Result>{conductor.nome}</Result>
          </Text>
          <Text>
            N. da Habilitação: <Result>{conductor.numeroHabilitacao}</Result>
          </Text>
          <Text>
            Cat. da Habilitação:{" "}
            <Result>{conductor.categoriaHabilitacao}</Result>
          </Text>
          <Text>
            Ven. da Habilitação:{" "}
            <Result>
              {formattedDate(String(conductor.vencimentoHabilitacao))}
            </Result>
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

export { CardConductor };
