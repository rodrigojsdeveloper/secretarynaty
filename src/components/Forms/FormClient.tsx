import { yupResolver } from "@hookform/resolvers/yup";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { api } from "@/services/api";
import * as yup from "yup";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const FormClient = () => {
  const [UF, setUF] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setUF(event.target.value as string);
  };

  const schema = yup.object().shape({
    numeroDocumento: yup.string().required(""),
    tipoDocumento: yup.string().required(""),
    nome: yup.string().required(""),
    logradouro: yup.string().required(""),
    numero: yup.string().required(""),
    bairro: yup.string().required(""),
    cidade: yup.string().required(""),
    uf: yup.string().required(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    api
      .post("Cliente", data)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <FormLayout heading="Cliente" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        id="outlined-basic"
        label="Número do Documento"
        variant="outlined"
        fullWidth
        {...register("numeroDocumento")}
        error={errors.numeroDocumento?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Tipo do Documento"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("tipoDocumento")}
        error={errors.tipoDocumento?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("nome")}
        error={errors.nome?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Logradouro"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("logradouro")}
        error={errors.logradouro?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Número"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("numero")}
        error={errors.numero?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Bairro"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("bairro")}
        error={errors.bairro?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Cidade"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("cidade")}
        error={errors.cidade?.message ? true : false}
      />
      <FormControl margin="normal" fullWidth>
        <InputLabel id="demo-simple-select-label">UF</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={UF}
          label="UF"
          {...register("uf")}
          onChange={handleChange}
          error={errors.uf?.message ? true : false}
        >
          <MenuItem value="AC">AC</MenuItem>
          <MenuItem value="AL">AL</MenuItem>
          <MenuItem value="AP">AP</MenuItem>
          <MenuItem value="AM">AM</MenuItem>
          <MenuItem value="BA">BA</MenuItem>
          <MenuItem value="CE">CE</MenuItem>
          <MenuItem value="DF">DF</MenuItem>
          <MenuItem value="ES">ES</MenuItem>
          <MenuItem value="GO">GO</MenuItem>
          <MenuItem value="MA">MA</MenuItem>
          <MenuItem value="MT">MT</MenuItem>
          <MenuItem value="MS">MS</MenuItem>
          <MenuItem value="MG">MG</MenuItem>
          <MenuItem value="PA">PA</MenuItem>
          <MenuItem value="PB">PB</MenuItem>
          <MenuItem value="PR">PR</MenuItem>
          <MenuItem value="PE">PE</MenuItem>
          <MenuItem value="PI">PI</MenuItem>
          <MenuItem value="RJ">RJ</MenuItem>
          <MenuItem value="RN">RN</MenuItem>
          <MenuItem value="RS">RS</MenuItem>
          <MenuItem value="RO">RO</MenuItem>
          <MenuItem value="RR">RR</MenuItem>
          <MenuItem value="SC">SC</MenuItem>
          <MenuItem value="SP">SP</MenuItem>
          <MenuItem value="SE">SE</MenuItem>
          <MenuItem value="TO">TO</MenuItem>
        </Select>
      </FormControl>
    </FormLayout>
  );
};

export { FormClient };
