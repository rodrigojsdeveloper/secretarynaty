import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";
import { IClient } from "@/interfaces";

const CardClient = ({ client }: IClient) => {
  return (
    <CardLayout alt="User" src={user}>
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
    </CardLayout>
  );
};

export { CardClient };
