import { styled } from "@mui/system";

const Container = styled("form")({
  fontFamily: "Lexend, monospace",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  maxWidth: "350px",
  height: "min-content",
  padding: "25px 25px 40px 25px",
  borderRadius: "4px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  margin: "0 10px 80px 10px",
  background: "#FAFAFA",
});

const Heading = styled("h2")({
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "1.25",
  color: "rgba(0, 0, 0, 0.87)",
});

const Content = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10px",
});

const ContainerButton = styled("div")({
  width: "100%",
});

export { Container, Heading, Content, ContainerButton };
