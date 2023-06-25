import { yupResolver } from "@hookform/resolvers/yup";
import { ModalEditLayout } from "./ModalEditLayout";
import { SubmitForm } from "../SubmitForm";
import { IModalEdit } from "@/interfaces";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import * as yup from "yup";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const ModalEditClient = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
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
    setLoading(true);

    data.id = id;

    api
      .put(`Cliente/${id}`, data)
      .then((_) => {
        toast.success("Cliente editado com sucesso!");
        setShowModalEdit(false);
      })
      .catch((error) => {
        toast.error("Erro ao tentar deletar cliente!");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <ModalEditLayout
      heading="Cliente"
      onSubmit={handleSubmit(onSubmitFunction)}
      setShowModalEdit={setShowModalEdit}
    >
      <TextField
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("nome")}
        error={errors.nome?.message ? true : false}
        defaultValue={data.nome}
      />
      <TextField
        label="Logradouro"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("logradouro")}
        error={errors.logradouro?.message ? true : false}
        defaultValue={data.logradouro}
      />
      <TextField
        label="Número"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("numero")}
        error={errors.numero?.message ? true : false}
        defaultValue={data.numero}
      />
      <TextField
        label="Bairro"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("bairro")}
        error={errors.bairro?.message ? true : false}
        defaultValue={data.bairro}
      />
      <TextField
        label="Cidade"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("cidade")}
        error={errors.cidade?.message ? true : false}
        defaultValue={data.cidade}
      />
      <FormControl margin="normal" fullWidth>
        <InputLabel id="demo-simple-select-label">UF</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="UF"
          {...register("uf")}
          error={errors.uf?.message ? true : false}
          defaultValue={data.uf}
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
      <SubmitForm loading={loading} />
    </ModalEditLayout>
  );
};

export { ModalEditClient };
