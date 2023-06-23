import { styled } from "@mui/system";

const Container = styled("div")({
  fontFamily: "Lexend, monospace",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  position: "fixed",
  zIndex: 2000,
  inset: 0,
  width: "100%",
  height: "100vh",
  paddingTop: "40px",
  background: "rgba(0, 0, 0, 0.5)",
  overflowY: "auto",
});

export { Container };
