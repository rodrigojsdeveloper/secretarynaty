import { ModalEditClient } from "../ModalEdit/ModalEditClient";
import { ModalBackground } from "../ModalBackground";
import { useParams } from "react-router-dom";
import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";
import { IClient } from "@/interfaces";
import { Button } from "@mui/material";
import { useState } from "react";

const CardClient = ({ client }: IClient) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  let { clientId } = useParams();

  clientId = String(client.id);

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditClient
            id={Number(clientId)}
            setShowModalEdit={setShowModalEdit}
          />
        </ModalBackground>
      ) : (
        <CardLayout
          alt="User"
          src={user}
          heading="Cliente"
          parameter="Cliente"
          id={Number(clientId)}
        >
          <Text>
            Número do Documento: <Result>{client.numeroDocumento}</Result>
          </Text>
          <Text>
            Tipo do Documento: <Result>{client.tipoDocumento}</Result>
          </Text>
          <Text>
            Nome: <Result>{client.nome}</Result>
          </Text>
          <Text>
            Logradouro: <Result>{client.logradouro}</Result>
          </Text>
          <Text>
            Número: <Result>{client.numero}</Result>
          </Text>
          <Text>
            Bairro: <Result>{client.bairro}</Result>
          </Text>
          <Text>
            Cidade: <Result>{client.cidade}</Result>
          </Text>
          <Text>
            UF: <Result>{client.uf}</Result>
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

export { CardClient };
