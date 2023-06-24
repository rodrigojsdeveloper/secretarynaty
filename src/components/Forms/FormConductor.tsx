import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { FormLayout } from "./FormLayout";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { useState } from "react";
import * as yup from "yup";

const FormConductor = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    nome: yup.string().required(""),
    numeroHabilitacao: yup.string().required(""),
    categoriaHabilitacao: yup.string().required(""),
    vencimentoHabilitacao: yup.string().required(""),
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
      .post("Condutor", data)
      .then((_) => toast.success("Condutor criado com sucesso!"))
      .catch((error) => {
        toast.error("Erro ao tentar criar condutor!");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormLayout heading="Condutor" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("nome")}
        error={errors.nome?.message ? true : false}
      />
      <TextField
        label="Número da Habilitação"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("numeroHabilitacao")}
        error={errors.numeroHabilitacao?.message ? true : false}
      />
      <TextField
        label="Categoria da Habilitação"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("categoriaHabilitacao")}
        error={errors.categoriaHabilitacao?.message ? true : false}
      />
      <TextField
        label="Vencimento da Habilitação"
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
        {...register("vencimentoHabilitacao")}
        error={errors.vencimentoHabilitacao?.message ? true : false}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {loading ? (
        <LoadingButton fullWidth size="large" loading variant="contained">
          Submit
        </LoadingButton>
      ) : (
        <Button fullWidth size="large" variant="contained" type="submit">
          Cadastrar
        </Button>
      )}
    </FormLayout>
  );
};

export { FormConductor };
