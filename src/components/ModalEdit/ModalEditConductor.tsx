import { yupResolver } from "@hookform/resolvers/yup";
import { ModalEditLayout } from "./ModalEditLayout";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IModalEdit } from "@/interfaces";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const ModalEditConductor = ({ id }: IModalEdit) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

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
    api
      .put(`Condutor/${id}`, data)
      .then((_) => setShowModalEdit(false))
      .catch((error) => console.error(error));
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
        margin="normal"
        fullWidth
        {...register("nome")}
        error={errors.nome?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Número da Habilitação"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("numeroHabilitacao")}
        error={errors.numeroHabilitacao?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Categoria da Habilitação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("categoriaHabilitacao")}
        error={errors.categoriaHabilitacao?.message ? true : false}
      />
    </ModalEditLayout>
  );
};

export { ModalEditConductor };
