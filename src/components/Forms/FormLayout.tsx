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
    </Container>
  );
};

export { FormLayout };
