import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";

interface IClient {
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface IClientComponent {
  client: IClient;
}

const CardClient = ({ client }: IClientComponent) => {
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
