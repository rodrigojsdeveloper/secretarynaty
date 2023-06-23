import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { StaticImageData } from "next/image";

export interface ICardLayout {
  alt: string;
  src: StaticImageData;
  children: React.ReactNode;
  heading: string;
  parameter: string;
  id: number;
}

export interface IVehicleProps {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

export interface IClientProps {
  id: number;
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface IConductorProps {
  id: number;
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: number;
  vencimentoHabilitacao: number;
}

export interface IDisplacementProps {
  id: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

export interface IVehicle {
  vehicle: IVehicleProps;
}

export interface IClient {
  client: IClientProps;
}

export interface IConductor {
  conductor: IConductorProps;
}

export interface IDisplacement {
  displacement: IDisplacementProps;
}

export interface IFormLayout {
  heading: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
export interface IModalBackground {
  children: React.ReactNode;
}

export interface IModalDelete {
  heading: string;
  parameter: string;
  id: number;
  setShowModalDelete: Dispatch<SetStateAction<boolean>>;
}

export interface IModalEditLayout {
  heading: string;
  setShowModalEdit: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export interface IModalEdit {
  id: number;
  setShowModalEdit: Dispatch<SetStateAction<boolean>>;
  data: any;
}

export interface IListLayout {
  heading: string;
  children: React.ReactNode;
}
