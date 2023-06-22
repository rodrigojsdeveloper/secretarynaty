import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import * as yup from "yup";

const FormConductor = () => {
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
      .post("Condutor", data)
      .then((_) => {})
      .catch((error) => console.error(error));
  };

  return (
    <FormLayout heading="Condutor" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("nome")}
        error={errors.nome?.message ? true : false}
      />
      <TextField
        id="outlined-basic"
        label="Número da Habilitação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("numeroHabilitacao")}
        error={errors.numeroHabilitacao?.message ? true : false}
      />
    </FormLayout>
  );
};

export { FormConductor };
