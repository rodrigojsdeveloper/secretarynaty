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
  inicioDeslocamento: string;
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
