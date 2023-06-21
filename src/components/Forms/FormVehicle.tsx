import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";

const FormVehicle = () => {
  return (
    <FormLayout heading="Veículo">
      <TextField
        id="outlined-basic"
        label="Placa"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Marca do Modelo"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Ano de Fabricação"
        variant="outlined"
        margin="dense"
        type="number"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="KM Atual"
        variant="outlined"
        margin="normal"
        type="number"
        fullWidth
      />
    </FormLayout>
  );
};

export { FormVehicle };
