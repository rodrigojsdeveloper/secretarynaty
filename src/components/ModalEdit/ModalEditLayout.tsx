import { Container, Content, Heading, ContainerButton } from "./style";
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
      <Heading>Editar {heading}</Heading>
      {children}
      <Content>
        <ContainerButton>
          <Button fullWidth size="large" variant="contained" type="submit">
            Editar
          </Button>
        </ContainerButton>
        <Button
          fullWidth
          size="large"
          variant="outlined"
          onClick={() => setShowModalEdit(false)}
        >
          Voltar
        </Button>
      </Content>
    </Container>
  );
};

export { ModalEditLayout };
