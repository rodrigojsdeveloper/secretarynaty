"use client";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { FormClient } from "@/components/Forms/FormClient";
import { FormConductor } from "@/components/Forms/FormConductor";
import { FormDisplacement } from "@/components/Forms/FormDisplacement";
import { CardLayout } from "@/components/Cards/CardLayout";
import { CardVehicle } from "@/components/Cards/CardVehicle";
import { ListLayout } from "@/components/Lists/ListLayout";
import { ListClients } from "@/components/Lists/ListClients";
import { Providers } from "@/contexts";
import { ListConductors } from "@/components/Lists/ListConductors";
import { FormVehicle } from "@/components/Forms/FormVehicle";
import { ListVehicles } from "@/components/Lists/ListVehicles";

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  padding: "10px 20px",
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
      <Providers>
        <FormVehicle />
        <ListVehicles />
      </Providers>
    </Container>
  );
}
