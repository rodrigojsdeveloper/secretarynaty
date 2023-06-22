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

const ModalEditVehicle = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    placa: yup.string().required(""),
    marcaModelo: yup.string().required(""),
    anoFabricacao: yup.string().required(""),
    kmAtual: yup.string().required(""),
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
      .put(`Veiculo/${id}`, data)
      .then((_) => setShowModalEdit(false))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <ModalEditLayout
      heading="Veículo"
      onSubmit={handleSubmit(onSubmitFunction)}
      setShowModalEdit={setShowModalEdit}
    >
      <TextField
        id="outlined-basic"
        label="Placa"
        variant="outlined"
        fullWidth
        {...register("placa")}
        error={errors.placa?.message ? true : false}
        defaultValue={data.placa}
      />
      <TextField
        id="outlined-basic"
        label="Marca do Modelo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("marcaModelo")}
        error={errors.marcaModelo?.message ? true : false}
        defaultValue={data.marcaModelo}
      />
      <TextField
        id="outlined-basic"
        label="Ano de Fabricação"
        variant="outlined"
        margin="dense"
        type="number"
        fullWidth
        {...register("anoFabricacao")}
        error={errors.anoFabricacao?.message ? true : false}
        defaultValue={data.anoFabricacao}
      />
      <TextField
        id="outlined-basic"
        label="KM Atual"
        variant="outlined"
        margin="normal"
        type="number"
        fullWidth
        {...register("kmAtual")}
        error={errors.kmAtual?.message ? true : false}
        defaultValue={data.kmAtual}
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

export { ModalEditVehicle };
