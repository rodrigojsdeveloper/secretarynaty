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
    kmFinal: yup.string().required(""),
    fimDeslocamento: yup.string().required(""),
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
        label="KM Final"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("kmFinal")}
        error={errors.kmFinal?.message ? true : false}
        defaultValue={data.kmFinal}
      />
      <TextField
        id="outlined-basic"
        label="Fim do Deslocamento"
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
        {...register("fimDeslocamento")}
        error={errors.fimDeslocamento?.message ? true : false}
        defaultValue={data.fimDeslocamento}
        InputLabelProps={{
          shrink: true,
        }}
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
        <LoadingButton fullWidth loading variant="contained">
          Submit
        </LoadingButton>
      ) : (
        <Button
          fullWidth
          variant="contained"
          type="submit"
          style={{ background: "#2196f3" }}
        >
          Editar
        </Button>
      )}
    </ModalEditLayout>
  );
};

export { ModalEditDisplacement };
