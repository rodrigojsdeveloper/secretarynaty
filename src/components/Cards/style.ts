import { styled } from "@mui/system";

const Container = styled("div")({
  width: "100%",
  maxWidth: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "4px",
  padding: "10px 10px 25px 10px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

const Content = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
});

export { Container, Content };
