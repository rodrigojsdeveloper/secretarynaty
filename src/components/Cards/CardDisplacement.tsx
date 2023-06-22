import maps from "../../assets/displacement.png";
import { CardLayout } from "./CardLayout";
import { Result, Text } from "./style";

interface IDisplacement {
  kmInicial: number;
  inicioDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

interface IDisplacementComponent {
  displacement: IDisplacement;
}

const CardDisplacement = ({ displacement }: IDisplacementComponent) => {
  return (
    <CardLayout alt="Maps" src={maps}>
      <Text>
        KM Inicial: <Result>{displacement.kmInicial}</Result>
      </Text>
      <Text>
        Inicio do Deslocamento:{" "}
        <Result>{displacement.inicioDeslocamento}</Result>
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
    </CardLayout>
  );
};

export { CardDisplacement };
