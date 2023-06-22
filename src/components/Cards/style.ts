import { styled } from "@mui/system";

const Container = styled("div")({
  width: "100%",
  maxWidth: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "4px",
  padding: "20px 30px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

const Content = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10px"
});

const Text = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "15px",
});

const Result = styled("p")({
  fontWeight: "500",
  color: "gray",
});

export { Container, Content, Text, Result };
