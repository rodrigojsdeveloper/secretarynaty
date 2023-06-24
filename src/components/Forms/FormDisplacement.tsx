import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const FormDisplacement = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    kmInicial: yup.string().required(""),
    inicioDeslocamento: yup.string().required(""),
    checkList: yup.string().required(""),
    motivo: yup.string().required(""),
    observacao: yup.string().required(""),
    idCondutor: yup.number().required(""),
    idVeiculo: yup.number().required(""),
    idCliente: yup.number().required(""),
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

    api
      .post("Deslocamento/IniciarDeslocamento", data)
      .then((_) => toast.success("Deslocamento criado com sucesso!"))
      .catch((error) => {
        toast.error("Erro ao tentar criar deslocamento!");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormLayout
      heading="Deslocamento"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <TextField
        label="KM Inicial"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("kmInicial")}
        error={errors.kmInicial?.message ? true : false}
      />
      <TextField
        label="Inicio do Deslocamento"
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
        {...register("inicioDeslocamento")}
        error={errors.inicioDeslocamento?.message ? true : false}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Check List"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("checkList")}
        error={errors.checkList?.message ? true : false}
      />
      <TextField
        label="Motivo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("motivo")}
        error={errors.motivo?.message ? true : false}
      />
      <TextField
        label="Observação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("observacao")}
        error={errors.observacao?.message ? true : false}
      />
      <TextField
        label="ID Condutor"
        variant="outlined"
        margin="normal"
        fullWidth
        type="number"
        {...register("idCondutor")}
        error={errors.idCondutor?.message ? true : false}
      />
      <TextField
        label="iD Veículo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("idVeiculo")}
        error={errors.idVeiculo?.message ? true : false}
      />
      <TextField
        label="ID Cliente"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("idCliente")}
        error={errors.idCliente?.message ? true : false}
      />
      {loading ? (
        <LoadingButton fullWidth size="large" loading variant="contained">
          Submit
        </LoadingButton>
      ) : (
        <Button fullWidth size="large" variant="contained" type="submit">
          Cadastrar
        </Button>
      )}
    </FormLayout>
  );
};

export { FormDisplacement };
