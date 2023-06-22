import { Container, Heading } from "./style";
import { IFormLayout } from "@/interfaces";
import { Button } from "@mui/material";

const FormLayout = ({ heading, children, onSubmit }: IFormLayout) => {
  return (
    <Container onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      {children}
      <Button fullWidth size="large" variant="contained" type="submit">
        Cadastrar
      </Button>
    </Container>
  );
};

export { FormLayout };
