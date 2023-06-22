import { Container, Content, Heading } from "./style";
import { IModalEditLayout } from "@/interfaces";
import { Button } from "@mui/material";
import { api } from "@/services/api";

const ModalEditLayout = ({
  heading,
  parameter,
  parameterDisplacement,
  id,
  data,
  onSubmit,
  setShowModalEdit,
  children,
}: IModalEditLayout) => {
  const editCard = () => {
    api
      .put(`${parameter}/${id}/${parameterDisplacement}`, data)
      .then((_) => {})
      .catch((error) => console.error(error));
  };

  return (
    <Container onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      {children}
      <Content>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={() => editCard()}
        >
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
