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

const ModalEditConductor = ({ id, setShowModalEdit, data }: IModalEdit) => {
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
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

    data.id = id;

    api
      .put(`Condutor/${id}`, data)
      .then((_) => {
        toast.success("Condutor editado com sucesso!");
        setShowModalEdit(false);
      })
      .catch((error) => {
        toast.error("Erro ao tentar deletar condutor!");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <ModalEditLayout
      heading="Condutor"
      onSubmit={handleSubmit(onSubmitFunction)}
      setShowModalEdit={setShowModalEdit}
    >
      <TextField
        label="Categoria da Habilitação"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("categoriaHabilitacao")}
        error={errors.categoriaHabilitacao?.message ? true : false}
        defaultValue={data.catergoriaHabilitacao}
      />
      <TextField
        label="Vencimento da Habilitação"
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
        {...register("vencimentoHabilitacao")}
        error={errors.vencimentoHabilitacao?.message ? true : false}
        defaultValue={data.vencimentoHabilitacao.split("T")[0]}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <SubmitForm loading={loading} />
    </ModalEditLayout>
  );
};

export { ModalEditConductor };
