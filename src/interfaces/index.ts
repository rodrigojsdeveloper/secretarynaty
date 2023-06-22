export interface IVehicleProps {
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

export interface IVehicle {
  vehicle: IVehicleProps;
}
