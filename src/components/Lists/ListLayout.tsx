import { Container, Content, Heading } from "./style";
import { IListLayout } from "@/interfaces";

const ListLayout = ({ heading, children }: IListLayout) => {
  return (
    <Container>
      <Heading>{heading}</Heading>

      <Content>{children}</Content>
    </Container>
  );
};

export { ListLayout };
