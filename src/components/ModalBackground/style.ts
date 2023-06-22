import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  position: "fixed",
  zIndex: 2000,
  inset: 0,
  width: "100%",
  height: "100vh",
  padding: "40px 20px",
  background: "rgba(0, 0, 0, 0.5)",
});

export { Container };
