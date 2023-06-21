import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Container } from "./style";
import React from "react";

const Form = () => {
  const [UFs, setUFs] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setUFs(event.target.value as string);
  };

  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="Número do Documento"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Tipo do Documento"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <TextField id="outlined-basic" label="Logradouro" variant="outlined" />
      <TextField id="outlined-basic" label="Número" variant="outlined" />
      <TextField id="outlined-basic" label="Bairro" variant="outlined" />
      <TextField id="outlined-basic" label="Cidade" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">UF</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={UFs}
          label="UF"
          onChange={handleChange}
        >
          <MenuItem value="Acre">AC</MenuItem>
          <MenuItem value="Alagoas">AL</MenuItem>
          <MenuItem value="Amapá">AP</MenuItem>
          <MenuItem value="Amazonas">AM</MenuItem>
          <MenuItem value="Bahia">BA</MenuItem>
          <MenuItem value="Ceará">CE</MenuItem>
          <MenuItem value="Distrito Federal">DF</MenuItem>
          <MenuItem value="Espírito Santo">ES</MenuItem>
          <MenuItem value="Goiás">GO</MenuItem>
          <MenuItem value="Maranhão">MA</MenuItem>
          <MenuItem value="Mato Grosso">MT</MenuItem>
          <MenuItem value="Mato Grosso do Sul">MS</MenuItem>
          <MenuItem value="Minas Gerais">MG</MenuItem>
          <MenuItem value="Pará">PA</MenuItem>
          <MenuItem value="Paraíba">PB</MenuItem>
          <MenuItem value="Paraná">PR</MenuItem>
          <MenuItem value="Pernambuco">PE</MenuItem>
          <MenuItem value="Piauí">PI</MenuItem>
          <MenuItem value="Rio de Janeiro">RJ</MenuItem>
          <MenuItem value="Rio Grande do Norte">RN</MenuItem>
          <MenuItem value="Rio Grande do Sul">RS</MenuItem>
          <MenuItem value="Rondônia">RO</MenuItem>
          <MenuItem value="Roraima">RR</MenuItem>
          <MenuItem value="Santa Catarina">SC</MenuItem>
          <MenuItem value="São Paulo">SP</MenuItem>
          <MenuItem value="Sergipe">SE</MenuItem>
          <MenuItem value="Tocantins">TO</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export { Form };
