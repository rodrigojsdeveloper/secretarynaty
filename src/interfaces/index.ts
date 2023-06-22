export interface IVehicleProps {
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

export interface IVehicle {
  vehicle: IVehicleProps;
}

export interface IClientProps {
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface IClient {
  client: IClientProps;
}

export interface IConductorProps {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: number;
  vencimentoHabilitacao: number;
}

export interface IConductor {
  conductor: IConductorProps;
}

export interface IDisplacementProps {
  kmInicial: number;
  inicioDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

export interface IDisplacement {
  displacement: IDisplacementProps;
}
