import { ModalBackground } from "../ModalBackground";
import { Container, Content } from "./style";
import { ModalDelete } from "../ModalDelete";
import { ICardLayout } from "@/interfaces";
import { Button } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

const CardLayout = ({
  alt,
  src,
  children,
  heading,
  parameter,
  id,
}: ICardLayout) => {
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  return (
    <>
      {showModalDelete ? (
        <ModalBackground>
          <ModalDelete
            heading={heading}
            parameter={parameter}
            id={id}
            setShowModalDelete={setShowModalDelete}
          />
        </ModalBackground>
      ) : (
        <Container>
          <Image alt={alt} src={src} width={200} />
          {children}
          <Content>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setShowModalDelete(true)}
            >
              Deletar
            </Button>
            <Button variant="outlined">Editar</Button>
          </Content>
        </Container>
      )}
    </>
  );
};

export { CardLayout };
