import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import * as yup from "yup";

const FormDisplacement = () => {
  const schema = yup.object().shape({
    kmInicial: yup.string().required(""),
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
    api
      .post("Deslocamento/IniciarDeslocamento", data)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <FormLayout
      heading="Deslocamento"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <TextField
        id="outlined-basic"
        label="KM Inicial"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("kmInicial")}
        error={errors.kmInicial?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Check List"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("checkList")}
        error={errors.checkList?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Motivo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("motivo")}
        error={errors.motivo?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Observação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("observacao")}
        error={errors.observacao?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="ID Condutor"
        variant="outlined"
        margin="normal"
        fullWidth
        type="number"
        {...register("idCondutor")}
        error={errors.idCondutor?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="iD Veículo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("idVeiculo")}
        error={errors.idVeiculo?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="ID Cliente"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("idCliente")}
        error={errors.idCliente?.message ? true : false}
      />
    </FormLayout>
  );
};

export { FormDisplacement };
