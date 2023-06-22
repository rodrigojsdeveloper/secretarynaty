import { styled } from "@mui/system";

const Container = styled("div")({
  width: "100%",
  maxWidth: "300px",
  height: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#FAFAFA",
  borderRadius: "4px",
});

const Content = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10px",
});

const Heading = styled("h2")({
  width: "100%",
  height: "35px",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "22px",
  background: "#F1F1F1",
  textAlign: "center",
  paddingTop: "10px",
  margin: "0px",
  borderRadius: "4px 4px 0px 0px",
});

const Text = styled("p")({
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "15px",
  color: "gray",
  margin: "25px 0 20px 0",
});

export { Container, Content, Text, Heading };
