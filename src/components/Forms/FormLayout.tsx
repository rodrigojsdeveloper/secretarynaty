import { Button } from "@mui/material";
import { Container, Heading } from "./style";

interface IFormLayout {
  heading: string;
  children: React.ReactNode;
}

const FormLayout = ({ heading, children }: IFormLayout) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      {children}
      <Button fullWidth size="large" variant="contained">
        Cadastrar
      </Button>
    </Container>
  );
};

export { FormLayout };
