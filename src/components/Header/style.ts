import { styled } from "@mui/material";

const Container = styled("div")({
  fontFamily: "Lexend, monospace",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "70px",
  background: "#FAFAFA",
  borderBottom: "2px solid #F1F1F1",
  position: "fixed",
  top: 0,
  zIndex: 1000,
  padding: "5px 15px 5px 20px",
  boxSizing: "border-box",
  ["@media (max-width: 1040px)"]: {
    padding: "5px 15px",
  },
});

const SubContainer = styled("div")({
  width: "100%",
  maxWidth: "1440px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
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
  margin: "0",
  ["@media (min-width: 1040px)"]: {
    display: "none",
  },
});

export { Container, SubContainer, Content, Link, ContainerImage };
