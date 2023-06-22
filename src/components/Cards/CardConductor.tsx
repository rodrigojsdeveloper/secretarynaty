import { IConductor } from "@/interfaces";
import { CardLayout } from "./CardLayout";
import user from "../../assets/user.png";
import { Result, Text } from "./style";

const CardConductor = ({ conductor }: IConductor) => {
  const dateObj = new Date(conductor.vencimentoHabilitacao);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const formattedDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;

  return (
    <CardLayout alt="User" src={user}>
      <Text>
        Nome: <Result>{conductor.nome}</Result>
      </Text>
      <Text>
        N. da Habilitação: <Result>{conductor.numeroHabilitacao}</Result>
      </Text>
      <Text>
        Cat. da Habilitação: <Result>{conductor.categoriaHabilitacao}</Result>
      </Text>
      <Text>
        Ven. da Habilitação: <Result>{formattedDate}</Result>
      </Text>
    </CardLayout>
  );
};

export { CardConductor };
