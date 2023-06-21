import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";

const FormConductor = () => {
  return (
    <FormLayout heading="Condutor">
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Número da Habilitação"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Categoria da Habilitação"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Vencimento da Habilitação"
        variant="outlined"
        margin="normal"
        fullWidth
      />
    </FormLayout>
  );
};

export { FormConductor };
