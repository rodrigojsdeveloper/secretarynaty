import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitForm } from "../SubmitForm";
import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const FormVehicle = () => {
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
      .post("Veiculo", data)
      .then((_) => toast.success("Veículo criado com sucesso!"))
      .catch((error) => {
        toast.error("Erro ao tentar criar veículo!");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormLayout heading="Veículo" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        label="Placa"
        variant="outlined"
        fullWidth
        {...register("placa")}
        error={errors.placa?.message ? true : false}
      />
      <TextField
        label="Marca do Modelo"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("marcaModelo")}
        error={errors.marcaModelo?.message ? true : false}
      />
      <TextField
        label="Ano de Fabricação"
        variant="outlined"
        margin="dense"
        type="number"
        fullWidth
        {...register("anoFabricacao")}
        error={errors.anoFabricacao?.message ? true : false}
      />
      <TextField
        label="KM Atual"
        variant="outlined"
        margin="normal"
        type="number"
        fullWidth
        {...register("kmAtual")}
        error={errors.kmAtual?.message ? true : false}
      />
      <SubmitForm loading={loading} />
    </FormLayout>
  );
};

export { FormVehicle };
