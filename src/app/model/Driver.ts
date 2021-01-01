export class Driver {
  id: number;
  alias: string;
  status: DriverStatus;
}

export enum DriverStatus {
  DRIVING = 'Driving with passengers',
  IDLE = 'Waiting for passengers',
  DISABLED = 'Not accepting new trips',
}
