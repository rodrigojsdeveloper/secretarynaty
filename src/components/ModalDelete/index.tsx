import { Container, Text, Content, Heading } from "./style";
import { IModalDelete } from "@/interfaces";
import { Button } from "@mui/material";
import { api } from "@/services/api";

const ModalDelete = ({
  heading,
  parameter,
  id,
  setShowModalDelete,
}: IModalDelete) => {
  const deleteCard = () => {
    api
      .delete(`${parameter}/${id}`)
      .then((_) => {})
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Heading>Deletar {heading}</Heading>

      <Text>Quer mesmo deletar?</Text>

      <Content>
        <Button variant="outlined" color="error" onClick={() => deleteCard()}>
          Sim
        </Button>
        <Button variant="outlined" onClick={() => setShowModalDelete(false)}>
          Voltar
        </Button>
      </Content>
    </Container>
  );
};

export { ModalDelete };
