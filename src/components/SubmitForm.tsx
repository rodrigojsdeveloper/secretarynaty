import { ISubmitForm } from "@/interfaces";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";

const SubmitForm = ({ loading }: ISubmitForm) => {
  return (
    <>
      {loading ? (
        <LoadingButton fullWidth variant="contained" loading>
          Submit
        </LoadingButton>
      ) : (
        <Button
          fullWidth
          variant="contained"
          type="submit"
          style={{ background: "#2196f3" }}
        >
          Cadastrar
        </Button>
      )}
    </>
  );
};

export { SubmitForm };
