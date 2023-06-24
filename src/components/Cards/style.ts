import { styled } from "@mui/system";

const Container = styled("div")({
  fontFamily: "Lexend, monospace",
  width: "100%",
  maxWidth: "220px",
  height: "min-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "4px",
  padding: "15px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  margin: "0px 10px 15px 10px",
});

const Content = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10px",
});

const Text = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "600",
  margin: "0",
});

const Result = styled("p")({
  fontWeight: "500",
  color: "gray",
});

export { Container, Content, Text, Result };
