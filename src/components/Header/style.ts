import { styled } from "@mui/material";

const Container = styled("div")({
  fontFamily: "Lexend, monospace",
  width: "100%",
  height: "70px",
  background: "#FAFAFA",
  borderBottom: "2px solid #F1F1F1",
  position: "fixed",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1000,
  padding: "5px 50px",
  boxSizing: "border-box",
});

const Content = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Link = styled("a")({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "16px",
  color: "gray",
  margin: "0 10px",
  textDecoration: "unset",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#000",
  },
});

export { Container, Content, Link };
