"use client";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { FormClient } from "@/components/Forms/FormClient";
import { FormConductor } from "@/components/Forms/FormConductor";

const Container = styled("div")({});

const Heading = styled("h1")({
  color: "black",
  fontSize: "65px",
  fontWeight: "600",
  textTransform: "capitalize",
  lineHeight: "1.1em",
  letterSpacing: "-0.65px",
  width: "100%",
  maxWidth: "250px",
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
  return (
    <Container>
      <FormClient />
    </Container>
  );
}