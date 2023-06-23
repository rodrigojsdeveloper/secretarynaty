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
  ["@media (max-width: 425px)"]: {
    padding: "5px 0",
  },
});

const Content = styled("nav")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  ["@media (max-width: 1040px)"]: {
    display: "none",
  },
});

const Link = styled("a")({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "16px",
  color: "gray",
  margin: "10px",
  textDecoration: "unset",
  "&:hover": {
    cursor: "pointer",
  },
});

const ContainerImage = styled("figure")({
  ["@media (min-width: 1040px)"]: {
    display: "none",
  },
});

export { Container, Content, Link, ContainerImage };
