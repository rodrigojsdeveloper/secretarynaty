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
  margin: "0px 5px 15px 5px",
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
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "15px",
});

const Result = styled("p")({
  width: "100px",
  maxWidth: "100%",
  fontWeight: "500",
  color: "gray",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "right",
});

export { Container, Content, Text, Result };
