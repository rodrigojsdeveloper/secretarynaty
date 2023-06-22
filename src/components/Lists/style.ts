import { styled } from "@mui/system";

const Container = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "550px",
});

const Heading = styled("h2")({
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "1.25",
  color: "rgba(0, 0, 0, 0.87)",
});

const Content = styled("div")({
  width: "100%",
  height: "600px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "4px",
});

export { Container, Heading, Content };
