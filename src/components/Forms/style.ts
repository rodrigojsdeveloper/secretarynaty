import { styled } from "@mui/system";

const Container = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "350px",
  padding: "25px 25px 30px 25px",
  borderRadius: "4px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
});

const Heading = styled("h2")({
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "1.25",
  color: "rgba(0, 0, 0, 0.87)",
});

export { Container, Heading };
