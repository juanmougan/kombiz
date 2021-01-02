export class Driver {
  id: number;
  alias: string;
  status: DriverStatus;
  vehicleType: VehicleType;
  vehicleTypeEnum: typeof VehicleType; // Hacky way to use the enum on the component
}

export enum DriverStatus {
  DRIVING = 'Driving with passengers',
  IDLE = 'Waiting for passengers',
  DISABLED = 'Not accepting new trips',
}

export enum VehicleType {
  CAR = 'Car',
  VAN = 'Van',
  TRUCK = 'Truck',
}
