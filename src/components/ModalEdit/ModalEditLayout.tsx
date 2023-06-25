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
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setShowModalEdit(false)}
            style={{ color: "#2196f3", borderColor: "#2196f3" }}
          >
            Voltar
          </Button>
        </ContainerButton>
      </Content>
    </Container>
  );
};

export { ModalEditLayout };
