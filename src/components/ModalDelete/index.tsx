import { Container, Text, Content, Heading, ContainerButton } from "./style";
import { IModalDelete } from "@/interfaces";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { api } from "@/services/api";
import { useState } from "react";

const ModalDelete = ({
  heading,
  parameter,
  id,
  setShowModalDelete,
}: IModalDelete) => {
  const [loading, setLoading] = useState<boolean>(false);

  const deleteCard = () => {
    setLoading(true);

    api
      .delete(`${parameter}/${id}`)
      .then((_) => {})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Heading>Deletar {heading}</Heading>

      <Text>Quer mesmo deletar?</Text>

      <Content>
        <ContainerButton>
          {loading ? (
            <LoadingButton fullWidth loading variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => deleteCard()}
            >
              Sim
            </Button>
          )}
        </ContainerButton>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setShowModalDelete(false)}
        >
          Voltar
        </Button>
      </Content>
    </Container>
  );
};

export { ModalDelete };
