import { Container, Heading } from "./style";
import { IFormLayout } from "@/interfaces";

const FormLayout = ({ heading, children, onSubmit }: IFormLayout) => {
  return (
    <Container onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      {children}
    </Container>
  );
};

export { FormLayout };
