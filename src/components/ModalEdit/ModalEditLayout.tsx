import { Container, Content, Heading } from "./style";
import { IModalEditLayout } from "@/interfaces";
import { Button } from "@mui/material";

const ModalEditLayout = ({
  heading,
  onSubmit,
  setShowModalEdit,
  children,
}: IModalEditLayout) => {
  return (
    <Container onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      {children}
      <Content>
        <Button fullWidth size="large" variant="contained" type="submit">
          Editar
        </Button>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={() => setShowModalEdit(false)}
        >
          Voltar
        </Button>
      </Content>
    </Container>
  );
};

export { ModalEditLayout };
