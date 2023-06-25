import { ModalEditClient } from "../ModalEdit/ModalEditClient";
import { renderFieldValue } from "@/utils/renderFieldValue";
import { ModalBackground } from "../ModalBackground";
import { IClient, IClientProps } from "@/interfaces";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";
import { Button } from "@mui/material";
import { api } from "@/services/api";

const CardClient = ({ client }: IClient) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const [showClient, setShowClient] = useState<IClientProps>(
    {} as IClientProps
  );

  let { clientId } = useParams();

  clientId = String(client.id);

  useEffect(() => {
    api
      .get(`Cliente/${clientId}`)
      .then((res) => setShowClient(res.data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      {showModalEdit ? (
        <ModalBackground>
          <ModalEditClient
            id={Number(clientId)}
            setShowModalEdit={setShowModalEdit}
            data={showClient}
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
            Id: <Result>{renderFieldValue(client.id)}</Result>
          </Text>
          <Text>
            N. do Doc:{" "}
            <Result>{renderFieldValue(client.numeroDocumento)}</Result>
          </Text>
          <Text>
            Tipo do Doc:{" "}
            <Result>{renderFieldValue(client.tipoDocumento)}</Result>
          </Text>
          <Text>
            Nome: <Result>{renderFieldValue(client.nome)}</Result>
          </Text>
          <Text>
            Logradouro: <Result>{renderFieldValue(client.logradouro)}</Result>
          </Text>
          <Text>
            Número: <Result>{renderFieldValue(client.numero)}</Result>
          </Text>
          <Text>
            Bairro: <Result>{renderFieldValue(client.bairro)}</Result>
          </Text>
          <Text>
            Cidade: <Result>{renderFieldValue(client.cidade)}</Result>
          </Text>
          <Text>
            UF: <Result>{renderFieldValue(client.uf)}</Result>
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

export { CardClient };
