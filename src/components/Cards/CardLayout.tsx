import { Container, Content } from "./style";
import { Button } from "@mui/material";
import car from "../../assets/car.png";
import Image from "next/image";

interface ICardLayout {
  alt: string;
  src: string;
  children: React.ReactNode;
}

const CardLayout = ({ alt, src, children }: ICardLayout) => {
  return (
    <Container>
      <Image alt={alt} src={src} width={200} />
      {children}
      <Content>
        <Button variant="outlined" color="error">
          Deletar
        </Button>
        <Button variant="outlined">Editar</Button>
      </Content>
    </Container>
  );
};

export { CardLayout };
