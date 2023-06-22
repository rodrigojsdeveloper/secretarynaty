import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";

interface IConductor {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: number;
  vencimentoHabilitacao: number;
}

interface IConductorComponent {
  conductor: IConductor;
}

const CardConductor = ({ conductor }: IConductorComponent) => {
  return (
    <CardLayout alt="User" src={user}>
      <Text>
        Nome: <Result>{conductor.nome}</Result>
      </Text>
      <Text>
        Número da Habilitação: <Result>{conductor.numeroHabilitacao}</Result>
      </Text>
      <Text>
        Categoria da Habilitação:{" "}
        <Result>{conductor.categoriaHabilitacao}</Result>
      </Text>
      <Text>
        Vencimento da Habilitação:{" "}
        <Result>{conductor.vencimentoHabilitacao}</Result>
      </Text>
    </CardLayout>
  );
};

export { CardConductor };
