import { yupResolver } from "@hookform/resolvers/yup";
import { ModalEditLayout } from "./ModalEditLayout";
import { IModalEdit } from "@/interfaces";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const ModalEditDisplacement = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    kmInicial: yup.string().required(""),
    observacao: yup.string().required(""),
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
      .put(`Deslocamento/${id}/EncerrarDeslocamento`, data)
      .then((_) => {
        toast.success("Deslocamento editado com sucesso!");
        setShowModalEdit(false);
      })
      .catch((error) => {
        toast.error("Erro ao tentar deletar deslocamento!");
        console.error(error);
      })
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
        label="Observação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("observacao")}
        error={errors.observacao?.message ? true : false}
        defaultValue={data.observacao}
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
