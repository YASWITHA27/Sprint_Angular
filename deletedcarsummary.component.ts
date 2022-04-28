import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../Models/car';
import { CarService } from '../Services/car.service';

@Component({
  selector: 'app-deletedcarsummary',
  templateUrl: './deletedcarsummary.component.html',
  styleUrls: ['./deletedcarsummary.component.css']
})
export class DeletedcarsummaryComponent implements OnInit {
  cars:Car[]
  car:Car;
  constructor(private carService:CarService , private router:Router) {
    this.car=new Car();
    this.carService.GetDiscontinuedCars().subscribe(response=>{
      this.cars=response;})
   }

   OnClickBack()
    {
      this.router.navigateByUrl('carsummary')
    } 
  ngOnInit(): void {
  }

}

  