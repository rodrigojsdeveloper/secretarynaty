import { yupResolver } from "@hookform/resolvers/yup";
import { ModalEditLayout } from "./ModalEditLayout";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IModalEdit } from "@/interfaces";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const ModalEditVehicle = ({ id }: IModalEdit) => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

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
    api
      .put(`Veiculo/${id}`, data)
      .then((_) => setShowModalEdit(false))
      .catch((error) => console.error(error));
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
      />
      <TextField
        id="outlined-basic"
        label="Marca do Modelo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("marcaModelo")}
        error={errors.marcaModelo?.message ? true : false}
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
      />
    </ModalEditLayout>
  );
};

export { ModalEditVehicle };
