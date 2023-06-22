import { yupResolver } from "@hookform/resolvers/yup";
import { ModalEditLayout } from "./ModalEditLayout";
import { IModalEdit } from "@/interfaces";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const ModalEditDisplacement = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);

    api
      .put(`Deslocamento/${id}/EncerrarDeslocamento`, data)
      .then((_) => setShowModalEdit(false))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <ModalEditLayout
      heading="Deslocamento"
      onSubmit={handleSubmit(onSubmitFunction)}
      setShowModalEdit={setShowModalEdit}
    >
      <TextField
        id="outlined-basic"
        label="KM Inicial"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("kmInicial")}
        error={errors.kmInicial?.message ? true : false}
        defaultValue={data.kmInicial}
      />
      <TextField
        id="outlined-basic"
        label="Check List"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("checkList")}
        error={errors.checkList?.message ? true : false}
        defaultValue={data.checkList}
      />
      <TextField
        id="outlined-basic"
        label="Motivo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("motivo")}
        error={errors.motivo?.message ? true : false}
        defaultValue={data.motivo}
      />
      <TextField
        id="outlined-basic"
        label="Observação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("observacao")}
        error={errors.observacao?.message ? true : false}
        defaultValue={data.observacao}
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
        defaultValue={data.idCondutor}
      />
      <TextField
        id="outlined-basic"
        label="iD Veículo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("idVeiculo")}
        error={errors.idVeiculo?.message ? true : false}
        defaultValue={data.idVeiculo}
      />
      <TextField
        id="outlined-basic"
        label="ID Cliente"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("idCliente")}
        error={errors.idCliente?.message ? true : false}
        defaultValue={data.idCliente}
      />
      {loading ? (
        <LoadingButton fullWidth size="large" loading variant="contained">
          Submit
        </LoadingButton>
      ) : (
        <Button fullWidth size="large" variant="contained" type="submit">
          Editar
        </Button>
      )}
    </ModalEditLayout>
  );
};

export { ModalEditDisplacement };
