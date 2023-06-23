import { styled } from "@mui/system";

const Container = styled("div")({
  width: "100%",
  maxWidth: "1440px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  padding: "10px 20px",
  margin: "70px auto 0 auto",
  boxSizing: "border-box",
  ["@media (max-width: 1040px)"]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
});

export { Container };
