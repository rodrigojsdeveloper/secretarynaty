import { styled } from "@mui/system";

const Container = styled("div")({
  fontFamily: "Lexend, monospace",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "830px",
  marginLeft: "20px",
  boxSizing: "border-box",
  ["@media (max-width: 1040px)"]: {
    marginLeft: "0px",
    marginTop: "40px",
  },
});

const Heading = styled("h2")({
  width: "100%",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "1.25",
  color: "rgba(0, 0, 0, 0.87)",
  textAlign: "center",
});

const Content = styled("menu")({
  width: "100%",
  height: "600px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  flexFlow: "wrap",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "4px",
  padding: "10px 5px",
  overflowY: "auto",
  boxSizing: "border-box",
  ["@media (max-width: 1040px)"]: {
    justifyContent: "center",
  },
});

export { Container, Heading, Content };
