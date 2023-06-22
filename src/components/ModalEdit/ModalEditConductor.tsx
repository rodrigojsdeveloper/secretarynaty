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

const ModalEditConductor = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    nome: yup.string().required(""),
    numeroHabilitacao: yup.string().required(""),
    categoriaHabilitacao: yup.string().required(""),
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
      .put(`Condutor/${id}`, data)
      .then((_) => setShowModalEdit(false))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <ModalEditLayout
      heading="Condutor"
      onSubmit={handleSubmit(onSubmitFunction)}
      setShowModalEdit={setShowModalEdit}
    >
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("nome")}
        error={errors.nome?.message ? true : false}
        defaultValue={data.nome}
      />
      <TextField
        id="outlined-basic"
        label="Número da Habilitação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("numeroHabilitacao")}
        error={errors.numeroHabilitacao?.message ? true : false}
        defaultValue={data.numeroHabilitacao}
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

export { ModalEditConductor };
