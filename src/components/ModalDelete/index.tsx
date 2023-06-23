import { Container, Text, Content, Heading, ContainerButton } from "./style";
import { IModalDelete } from "@/interfaces";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ModalDelete = ({
  heading,
  parameter,
  id,
  setShowModalDelete,
}: IModalDelete) => {
  const [loading, setLoading] = useState<boolean>(false);

  const deleteCard = () => {
    setLoading(true);

    const data = { id: id };

    axios
      .request({
        url: `https://api-deslocamento.herokuapp.com/api/v1/${parameter}/${id}`,
        method: "delete",
        data: data,
      })
      .then((_) => toast.success(`${heading} deletado com sucesso!`))
      .catch((error) => {
        toast.error(`Erro ao tentar deletar ${heading.toLowerCase()}!`);
        console.error(error);
      })
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
