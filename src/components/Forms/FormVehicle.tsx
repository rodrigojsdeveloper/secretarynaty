import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import * as yup from "yup";

const FormVehicle = () => {
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
      .post("Veiculo", data)
      .then((_) => {})
      .catch((error) => console.error(error));
  };

  return (
    <FormLayout heading="Veículo" onSubmit={handleSubmit(onSubmitFunction)}>
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
    </FormLayout>
  );
};

export { FormVehicle };
