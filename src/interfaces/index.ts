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
