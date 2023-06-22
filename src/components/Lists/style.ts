import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "820px",
  marginLeft: "20px",
  ["@media (max-width: 1024px)"]: {
    marginLeft: "0px",
    marginTop: "40px",
  },
});

const Heading = styled("h2")({
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "1.25",
  color: "rgba(0, 0, 0, 0.87)",
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
  overflowY: "scroll",
  ["@media (max-width: 886px)"]: {
    justifyContent: "center",
  },
});

export { Container, Heading, Content };
