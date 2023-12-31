"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import home from "../assets/home.svg";
import { styled } from "@mui/system";
import Image from "next/image";

const Container = styled("div")({
  width: "100%",
  maxWidth: "1440px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  ["@media (max-width: 1024px)"]: {
    justifyContent: "start",
  },
});

const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});

const ContainerImage = styled("figure")({
  ["@media (max-width: 1024px)"]: {
    display: "none",
  },
});

const Heading = styled("h1")({
  color: "black",
  fontSize: "65px",
  fontWeight: "600",
  textTransform: "capitalize",
  lineHeight: "1.1em",
  letterSpacing: "-0.65px",
  width: "100%",
  maxWidth: "250px",
  ["@media (max-width: 768px)"]: {
    fontSize: "40px",
  },
});

const Text = styled("p")({
  fontSize: "14px",
  letterSpacing: "-0.32px",
  lineHeight: "1.5em",
  width: "100%",
  maxWidth: "443px",
  paddingBottom: "15px",
});

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Heading>Crie um deslocamento</Heading>

        <Text>
          Deslocamento é uma solução que permite gerenciar eficientemente
          deslocamentos. Ele oferece recursos para clientes, condutores e
          veículos, permitindo a criação, edição e exclusão de informações.
        </Text>

        <Button
          size="large"
          variant="contained"
          onClick={() => router.push("/client")}
          style={{ background: "#2196f3" }}
        >
          Entrar
        </Button>
      </Content>

      <ContainerImage>
        <Image src={home} alt="Home" />
      </ContainerImage>
    </Container>
  );
}
