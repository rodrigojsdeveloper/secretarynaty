import { Button } from "@mui/material";
import { Container, Heading } from "./style";
import { FormEventHandler } from "react";

interface IFormLayout {
  heading: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

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
