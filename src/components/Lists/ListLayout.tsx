import { Container, Content, Heading } from "./style";

interface IListLayout {
  heading: string;
  children: React.ReactNode;
}

const ListLayout = ({ heading, children }: IListLayout) => {
  return (
    <Container>
      <Heading>{heading}</Heading>

      <Content>{children}</Content>
    </Container>
  );
};

export { ListLayout };
