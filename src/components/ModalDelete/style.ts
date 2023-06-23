import { styled } from "@mui/system";

const Container = styled("div")({
  fontFamily: "Lexend, monospace",
  width: "100%",
  maxWidth: "300px",
  height: "min-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#FAFAFA",
  borderRadius: "4px",
  padding: "15px",
  margin: "0 10px"
});

const Content = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "10px 0",
});

const ContainerButton = styled("div")({
  width: "100%",
  marginBottom: "10px",
})

const Heading = styled("h2")({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "22px",
  textAlign: "center",
});

const Text = styled("p")({
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "15px",
  color: "gray",
  margin: "25px 0 20px 0",
});

export { Container, Content, Text, Heading, ContainerButton };
