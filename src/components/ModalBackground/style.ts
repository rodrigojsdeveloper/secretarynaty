import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  position: "fixed",
  zIndex: 1000,
  inset: 0,
  width: "100%",
  height: "100vh",
  paddingTop: "40px",
  background: "rgba(0, 0, 0, 0.5)",
  overflowY: "auto",
});

export { Container };
