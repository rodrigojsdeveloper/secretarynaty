import { formattedDate } from "@/utils/formattedDate";
import maps from "../../assets/displacement.png";
import { IDisplacement } from "@/interfaces";
import { CardLayout } from "./CardLayout";
import { Result, Text } from "./style";

const CardDisplacement = ({ displacement }: IDisplacement) => {
  return (
    <CardLayout alt="Maps" src={maps}>
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
    </CardLayout>
  );
};

export { CardDisplacement };
