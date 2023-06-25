import { yupResolver } from "@hookform/resolvers/yup";
import { ModalEditLayout } from "./ModalEditLayout";
import { SubmitForm } from "../SubmitForm";
import { IModalEdit } from "@/interfaces";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const ModalEditVehicle = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
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

    data.id = id;

    api
      .put(`Veiculo/${id}`, data)
      .then((_) => {
        toast.success("Veículo editado com sucesso!");
        setShowModalEdit(false);
      })
      .catch((error) => {
        toast.error("Erro ao tentar deletar veículo!");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <ModalEditLayout
      heading="Veículo"
      onSubmit={handleSubmit(onSubmitFunction)}
      setShowModalEdit={setShowModalEdit}
    >
      <TextField
        label="Marca do Modelo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("marcaModelo")}
        error={errors.marcaModelo?.message ? true : false}
        defaultValue={data.marcaModelo}
      />
      <TextField
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
        label="KM Atual"
        variant="outlined"
        margin="normal"
        type="number"
        fullWidth
        {...register("kmAtual")}
        error={errors.kmAtual?.message ? true : false}
        defaultValue={data.kmAtual}
      />
      <SubmitForm loading={loading} />
    </ModalEditLayout>
  );
};

export { ModalEditVehicle };
