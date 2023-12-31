import { ModalBackground } from "../ModalBackground";
import { ModalDelete } from "../ModalDelete";
import { Container, Content } from "./style";
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
      ) : null}

      <Container>
        <Image alt={alt} src={src} width={100} height={100} style={{ objectFit: "cover" }} />
        {children}
        <Content>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setShowModalDelete(true)}
            fullWidth
            size="small"
          >
            Deletar
          </Button>
        </Content>
      </Container>
    </>
  );
};

export { CardLayout };
