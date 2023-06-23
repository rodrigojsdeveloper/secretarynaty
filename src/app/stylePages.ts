import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  padding: "10px",
  marginTop: "70px",
  ["@media (max-width: 1040px)"]: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export { Container };
