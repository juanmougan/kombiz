import { Driver, DriverStatus, VehicleType } from './model/Driver';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  drivers: Array<Driver>;

  getDrivers(): Observable<Array<Driver>> {
    return of(this.drivers);
  }

  constructor() {
    this.drivers = new Array<Driver>();

    const driver1 = new Driver();
    driver1.id = 1;
    driver1.alias = 'michael92';
    driver1.status = DriverStatus.DRIVING;
    driver1.vehicleType = VehicleType.CAR;
    this.drivers.push(driver1);

    const driver2 = new Driver();
    driver2.id = 2;
    driver2.alias = 'GiaCarDriver';
    driver2.status = DriverStatus.IDLE;
    driver2.vehicleType = VehicleType.VAN;
    this.drivers.push(driver2);

    const driver3 = new Driver();
    driver3.id = 3;
    driver3.alias = 'MarkZuckerberg';
    driver3.status = DriverStatus.DISABLED;
    driver3.vehicleType = VehicleType.TRUCK;
    this.drivers.push(driver3);
  }
}
