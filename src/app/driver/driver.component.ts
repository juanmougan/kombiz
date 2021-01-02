import { element } from 'protractor';
import { DataService } from './../data.service';
import { Driver, VehicleType } from './../model/Driver';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit {
  drivers: Array<Driver>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDrivers().subscribe((next) => {
      this.drivers = next;
    });
  }
}
