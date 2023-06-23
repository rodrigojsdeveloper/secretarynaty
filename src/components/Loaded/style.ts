import { styled, keyframes } from "@mui/material";

const AnimateLoading = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Container = styled("div")({
  animation: `${AnimateLoading} 1s infinite`,
  border: "3px solid transparent",
  borderRadius: "50%",
  borderTopColor: "gray",
  height: "100px",
  width: "100px",
  margin: "auto",
});

export { Container };
